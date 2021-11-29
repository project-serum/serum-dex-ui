import { notify } from "./notifications";
import React, { useContext, useEffect, useState } from 'react';
import { Keypair, TransactionInstruction } from '@solana/web3.js';
import BN from 'bn.js';

import { useConnection } from "./connection";
import { useTokenRegistry } from "./tokensRegistry";

export enum VaultKey {
    Uninitialized = 0,
    VaultV1 = 3,
    SafetyDepositBoxV1 = 1,
    ExternalPriceAccountV1 = 2,
}

export enum VaultState {
    Damaged = 0,
    Active = 1,
    Bought = 2,
    Closed = 3,
}

export interface Vault {
    vaultPubkey: string;
    key: VaultKey;
    tokenProgram: string;
    fractionMint: string;
    authority: string;
    fractionTreasury: string;
    redeemTreasury: string;
    priceMint: string;
    allowFurtherShareCreation: boolean;
    pricingLookupAddress: string;
    tokenTypeCount: number;
    state: VaultState;
    fractionsSupply: BN;
    lockedPricePerShare: BN;
    createdAt: BN;
}

export interface VaultsMap {
    [key: string]: Vault;
}

export interface SafetyBox {
    safetyBoxPubkey: string;
    key: VaultKey;
    vault: string;
    tokenMint: string;
    store: string;
    order: number;
}

export interface VaultData {
    fractionMint: string; // mint address of fractions
    authority: string; // who did the fraktionalization
    supply: BN; // amount of fractions
    lockedPricePerFraction: BN; // price per share that was initialized on fraktionalization
    priceTokenMint: string; // mint address of SOL or FRKT token
    publicKey: string; // vault public key
    state: string;
    nftMint: string; // mint address of fraktionalized NFT
    name: string; // name of fraktionalized NFT
    imageSrc: string; // image source of fraktionalized NFT
    nftAttributes: { trait_type: string; value: string | number }[]; // arweave metadata attributes
    safetyBoxPubkey: string;
    store: string;
    fractionTreasury: string;
    redeemTreasury: string;
    isNftVerified: boolean;
    nftCollectionName?: string;
    createdAt: number;
    buyoutPrice: BN;
}

export interface CreateFraktionalizerResult {
    vault: string;
    fractionalMint: string;
    redeemTreasury: string;
    fractionTreasury: string;
    instructions: TransactionInstruction[];
    signers: Keypair[];
}



export type fetchVaultsFunction = () => Promise<VaultData[] | null>;

export type patchVaultFunction = (vaultInfo: VaultData) => void;

export interface FraktionContextType {
    loadingMarkets: boolean;
    vaultsMarkets: Array<any>;
}

export interface FraktionMarket {
    name: string;
    address: string;
    baseMint: string;
    programId: string;
}

export interface RawFraktionMarket {
    accountFlags: object;
    ownAddress: string;
    vaultSignerNonce: string;
    baseMint: string;
    quoteMint: string;
    baseVault: string;
    baseDepositsTotal: string;
    baseFeesAccrued: string;
    quoteVault: string;
    quoteDepositsTotal: string;
    quoteFeesAccrued: string;
    quoteDustThreshold: string;
    requestQueue: string;
    eventQueue: string;
    bids: string;
    asks: string;
    baseLotSize: string;
    quoteLotSize: string;
    feeRateBps: string;
    referrerRebatesAccrued: string;
}



const FraktionContext = React.createContext<FraktionContextType>({
    loadingMarkets: false,
    vaultsMarkets: [],

});

export const FraktionProvider = ({
    children,
}: {
    children: JSX.Element;
}): JSX.Element => {
    const connection = useConnection();
    const { tokens, loading: loadingTokens } = useTokenRegistry();
    const [loadingMarkets, setLoadingMarkets] = useState<boolean>(false);
    const [vaultsMarkets, setVaultsMarkets] = useState<FraktionMarket[]>([]);

    const fetchVaultsMarkets = async () => {
        setLoadingMarkets(true);
        try {
            const { fraktionMarkets: rawMarkets } = await getFraktionMarkets();
            const fraktionMarkets = rawMarkets.map((market: RawFraktionMarket) => {
                console.log({ tokens })
                const baseToken = tokens.find(token => token.address === market.baseMint);
                const quouteToken = tokens.find(token => token.address === market.quoteMint);
                return { name: `${baseToken?.symbol}/${quouteToken?.symbol}`, address: market.ownAddress, baseMint: baseToken?.address, programId: '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin' } as FraktionMarket
            })
            setVaultsMarkets(fraktionMarkets as Array<FraktionMarket>);
        } catch (error) {
            console.log(error);
        } finally {
            setLoadingMarkets(false)
        }
    };

    // const fetchTokens = async () => {
    //     setLoadingMarkets(true);
    //     try {
    //         const rawMarkets = await getFraktionMarkets();
    //         const fraktionMarkets = rawMarkets.map((market: RawFraktionMarket) => {
    //             const baseToken = tokens.find(token => token.address === market.baseMint);
    //             const quouteToken = tokens.find(token => token.address === market.quoteMint);
    //             return { name: `${baseToken?.symbol}/${quouteToken?.symbol}`, address: market.ownAddress } as FraktionMarket
    //         })
    //         setVaultsMarkets(fraktionMarkets as Array<FraktionMarket>);
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setLoadingMarkets(false)
    //     }
    // };



    useEffect(() => {
        if (!loadingMarkets) {

            fetchVaultsMarkets();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tokens, loadingTokens]);

    return (
        <FraktionContext.Provider
            value={{
                loadingMarkets,
                vaultsMarkets
            }}
        >
            {children}
        </FraktionContext.Provider>
    );
};

export const useFraktion = (): FraktionContextType => {
    const {
        loadingMarkets,
        vaultsMarkets
    } = useContext(FraktionContext);
    return {
        loadingMarkets,
        vaultsMarkets
    };
};

const REGISTRAR_URL = 'https://fraktion-tokens-register.herokuapp.com/market';

const MARKETS_URL =
    'https://fraktion-markets-pools-endpoin.herokuapp.com';

export const getFraktionMarkets = async (): Promise<
    any
    | []> => {
    try {
        const res = await fetch(MARKETS_URL);
        const list = await res.json();
        return list;
    } catch (error) {
        console.log(error);
        return []
    }

};

export const registerMarket = async (
    tickerName: string,
    marketPubkey: string,
    baseMint: string,
): Promise<boolean> => {
    try {
        const res = await fetch(REGISTRAR_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: `${tickerName}/SOL`,
                address: marketPubkey,
                baseMint,
            }),
        });

        const data = await res.json();

        if (data?.success) {
            notify({
                message: 'Market regitered successfully',
                description: 'Market registration can take up to an hour',
                type: 'success',
            });
        } else {
            notify({
                message: 'Market registration failed',
                type: 'error',
            });
            return false;
        }

        return true;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        notify({
            message: 'Market registration failed',
            type: 'error',
        });
        return false;
    }
};