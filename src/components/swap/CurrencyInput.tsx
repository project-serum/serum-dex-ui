import React, { useEffect, useState } from 'react';
import {
  calculateDependentAmount,
  getPoolName,
  getTokenName,
  isKnownMint,
  KnownToken,
  usePoolForBasket,
} from '../../utils/swap';
import { Card, Select } from 'antd';
import { NumericInput } from './NumericInput';
import {
  useAccountByMint,
  useCachedPool,
  useMint,
  useUserAccounts,
} from '../../utils/swapAccounts';
import { MintInfo } from '@solana/spl-token';
import { useConnection, useConnectionConfig } from '../../utils/connection';
import { PoolIcon, TokenIcon } from './TokenIcon';
import PopularTokens from './../../utils/swap-token-list.json';
import './CurrencyInputStyles.less';
import { PublicKey } from '@solana/web3.js';
import { PoolInfo, SwapTokenAccount } from '../../utils/swapTypes';

const { Option } = Select;

export const useCurrencyPairState = () => {
  const connection = useConnection();
  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');
  const [mintAddressA, setMintAddressA] = useState('');
  const [mintAddressB, setMintAddressB] = useState('');
  const [lastTypedAccount, setLastTypedAccount] = useState('');
  const accountA = useAccountByMint(mintAddressA);
  const accountB = useAccountByMint(mintAddressB);
  const mintA = useMint(mintAddressA);
  const mintB = useMint(mintAddressB);
  const pool = usePoolForBasket([mintAddressA, mintAddressB]);

  const calculateDependent = async () => {
    if (pool && mintAddressA && mintAddressB) {
      let setDependent;
      let amount;
      let independent;
      if (lastTypedAccount === mintAddressA) {
        independent = mintAddressA;
        setDependent = setAmountB;
        amount = parseFloat(amountA);
      } else {
        independent = mintAddressB;
        setDependent = setAmountA;
        amount = parseFloat(amountB);
      }

      const result = await calculateDependentAmount(
        connection,
        independent,
        amount,
        pool,
      );
      if (result !== undefined && Number.isFinite(result)) {
        setDependent(result.toFixed(2));
      } else {
        setDependent('');
      }
    }
  };

  useEffect(() => {
    calculateDependent();
  }, [amountB, amountA, lastTypedAccount]);

  const convertAmount = (amount: string, mint?: MintInfo) => {
    return parseFloat(amount) * Math.pow(10, mint?.decimals || 0);
  };

  return {
    A: {
      mintAddress: mintAddressA,
      account: accountA,
      mint: mintA,
      amount: amountA,
      setAmount: setAmountA,
      setMint: setMintAddressA,
      convertAmount: () => convertAmount(amountA, mintA),
    },
    B: {
      mintAddress: mintAddressB,
      account: accountB,
      mint: mintB,
      amount: amountB,
      setAmount: setAmountB,
      setMint: setMintAddressB,
      convertAmount: () => convertAmount(amountB, mintB),
    },
    setLastTypedAccount,
  };
};

export const CurrencyInput = (props: {
  mint?: string;
  amount?: string;
  title?: string;
  onInputChange?: (val: number) => void;
  onMintChange?: (account: string) => void;
}) => {
  const { userAccounts } = useUserAccounts();
  const { pools } = useCachedPool();
  const mint = useMint(props.mint);

  const { env } = useConnectionConfig();

  const tokens = !!env ? (PopularTokens[env] as KnownToken[]) : [];

  const renderPopularTokens = tokens.map((item) => {
    return (
      <Option value={item.mintAddress} title={item.mintAddress}>
        <div
          key={item.mintAddress}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <TokenIcon mintAddress={item.mintAddress} />
          {item.tokenSymbol}
        </div>
      </Option>
    );
  });

  // TODO: expand nested pool names ...?

  // group accounts by mint and use one with biggest balance
  const grouppedUserAccounts = userAccounts
    .sort((a, b) => {
      return b.info.amount.toNumber() - a.info.amount.toNumber();
    })
    .reduce((map, acc) => {
      const mint = acc.info.mint.toBase58();
      if (env && isKnownMint(env, mint)) {
        return map;
      }

      const pool = pools.find((p) => p && p.pubkeys.mint.toBase58() === mint);

      map.set(mint, (map.get(mint) || []).concat([{ account: acc, pool }]));

      return map;
    }, new Map<string, { account: SwapTokenAccount; pool: PoolInfo | undefined }[]>());

  // TODO: group multple accounts of same time and select one with max amount
  const renderAdditionalTokens = [...grouppedUserAccounts.keys()].map(
    (mint) => {
      const list = grouppedUserAccounts.get(mint);

      if (!list || list.length <= 0 || !env) {
        return null;
      }

      const account = list[0];

      let name: string;
      let icon: JSX.Element;
      if (account.pool) {
        name = getPoolName(env, account.pool);

        const sorted = account.pool.pubkeys.holdingMints
          .map((a: PublicKey) => a.toBase58())
          .sort();
        icon = <PoolIcon mintA={sorted[0]} mintB={sorted[1]} />;
      } else {
        name = getTokenName(env, mint);
        icon = <TokenIcon mintAddress={mint} />;
      }

      return (
        <Option value={mint} title={mint}>
          <div key={mint} style={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            {name}
          </div>
        </Option>
      );
    },
  );

  const userUiBalance = () => {
    const currentAccount = userAccounts?.find(
      (a) => a.info.mint.toBase58() === props.mint,
    );
    if (currentAccount && mint) {
      return (
        currentAccount.info.amount.toNumber() / Math.pow(10, mint.decimals)
      );
    }

    return 0;
  };

  return (
    <Card
      className="ccy-input"
      style={{ borderRadius: 20, margin: 15 }}
      bodyStyle={{ padding: 0 }}
    >
      <div className="ccy-input-header">
        <div className="ccy-input-header-left">{props.title}</div>

        <div className="ccy-input-header-right">
          Balance: {userUiBalance().toFixed(2)}
        </div>
      </div>
      <div className="ccy-input-header" style={{ padding: '0px 10px 5px 7px' }}>
        <NumericInput
          value={props.amount}
          onChange={(val: any) => {
            if (props.onInputChange) {
              props.onInputChange(val);
            }
          }}
          style={{
            fontSize: 20,
            boxShadow: 'none',
            borderColor: 'transparent',
            outline: 'transpaernt',
          }}
          placeholder="0.00"
        />

        <div className="ccy-input-header-right" style={{ display: 'flex' }}>
          <Select
            size="large"
            style={{ minWidth: 80 }}
            placeholder="CCY"
            value={props.mint}
            dropdownMatchSelectWidth={true}
            dropdownStyle={{ minWidth: 200 }}
            onChange={(item) => {
              if (props.onMintChange) {
                props.onMintChange(item);
              }
            }}
          >
            {[...renderPopularTokens, ...renderAdditionalTokens]}
          </Select>
        </div>
      </div>
    </Card>
  );
};
