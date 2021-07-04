import React, { useContext, useEffect, useState } from 'react';
import { useConnection } from './connection';
import { PublicKey } from '@solana/web3.js';
import {
  NameRegistryState,
  getHashedName,
  getNameAccountKey,
  getTwitterRegistry,
} from '@solana/spl-name-service';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useLocalStorageState } from './utils';

interface ReferrerContextValues {
  usdcRef: PublicKey | undefined;
  usdtRef: PublicKey | undefined;
  setRefCode: (arg: any) => void;
  refCode: string | undefined;
  allowRefLink: boolean;
}

const ReferrerContext: React.Context<null | ReferrerContextValues> = React.createContext<null | ReferrerContextValues>(
  null,
);

export const ASSOCIATED_TOKEN_PROGRAM_ID: PublicKey = new PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);

const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
const USDT_MINT = new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB');

export async function findAssociatedTokenAddress(
  walletAddress: PublicKey,
  tokenMintAddress: PublicKey,
): Promise<PublicKey> {
  return (
    await PublicKey.findProgramAddress(
      [
        walletAddress.toBuffer(),
        TOKEN_PROGRAM_ID.toBuffer(),
        tokenMintAddress.toBuffer(),
      ],
      ASSOCIATED_TOKEN_PROGRAM_ID,
    )
  )[0];
}

// Address of the SOL TLD
export const SOL_TLD_AUTHORITY = new PublicKey(
  '58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx',
);

export const getInputKey = async (input: string) => {
  let hashed_input_name = await getHashedName(input);
  let inputDomainKey = await getNameAccountKey(
    hashed_input_name,
    undefined,
    SOL_TLD_AUTHORITY,
  );
  return { inputDomainKey: inputDomainKey, hashedInputName: hashed_input_name };
};

export const useFeesAccountsFromRefCode = (refCode: string | undefined) => {
  const connection = useConnection();
  const [usdc, setUsdc] = useState<PublicKey | undefined>(undefined);
  const [usdt, setUsdt] = useState<PublicKey | undefined>(undefined);

  useEffect(() => {
    const fn = async () => {
      let usdcAddress: undefined | PublicKey = undefined;
      let usdtAddress: undefined | PublicKey = undefined;
      if (!refCode) {
        setUsdc(
          process.env.REACT_APP_USDC_REFERRAL_FEES_ADDRESS
            ? new PublicKey(process.env.REACT_APP_USDC_REFERRAL_FEES_ADDRESS)
            : undefined,
        );
        setUsdt(
          process.env.REACT_APP_USDT_REFERRAL_FEES_ADDRESS
            ? new PublicKey(process.env.REACT_APP_USDT_REFERRAL_FEES_ADDRESS)
            : undefined,
        );
        return;
      }
      try {
        let nameRegistryState: NameRegistryState;
        if (refCode.includes('.sol')) {
          const { inputDomainKey } = await getInputKey(
            refCode.replace('.sol', ''),
          );
          nameRegistryState = await NameRegistryState.retrieve(
            connection,
            inputDomainKey,
          );
        } else {
          nameRegistryState = await getTwitterRegistry(connection, refCode);
        }
        usdcAddress = await findAssociatedTokenAddress(
          nameRegistryState.owner,
          USDC_MINT,
        );
        usdtAddress = await findAssociatedTokenAddress(
          nameRegistryState.owner,
          USDT_MINT,
        );
        const usdcAccountInfo = await connection.getAccountInfo(usdcAddress);
        const usdtAccountInfo = await connection.getAccountInfo(usdtAddress);
        if (!!usdcAccountInfo?.data) setUsdc(usdcAddress);
        if (!!usdtAccountInfo?.data) setUsdt(usdtAddress);
      } catch (err) {
        console.warn(`Error getting refcode ${err}`);
      }
    };
    fn();
  }, [connection, refCode]);
  return { usdcRef: usdc, usdtRef: usdt };
};

export const ReferrerProvider = ({ children }) => {
  const allowRefLink = process.env.REACT_APP_ALLOW_REF_LINK === 'true';
  const [refCode, setRefCode] = useLocalStorageState('refCode');
  const { usdcRef, usdtRef } = useFeesAccountsFromRefCode(
    allowRefLink ? refCode : undefined,
  );
  useEffect(() => {
    if (!allowRefLink) setRefCode(null);
  }, [allowRefLink, setRefCode]);
  return (
    <ReferrerContext.Provider
      value={{ usdcRef, usdtRef, setRefCode, refCode, allowRefLink }}
    >
      {children}
    </ReferrerContext.Provider>
  );
};

export const useReferrer = () => {
  const context = useContext(ReferrerContext);
  if (!context) throw new Error('Missing referrer context');
  return {
    usdcRef: context.usdcRef,
    usdtRef: context.usdtRef,
    setRefCode: context.setRefCode,
    refCode: context.refCode,
    allowRefLink: context.allowRefLink,
  };
};
