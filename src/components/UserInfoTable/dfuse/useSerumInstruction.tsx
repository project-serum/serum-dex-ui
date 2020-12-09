import { useCallback, useEffect, useState } from 'react';
import { createDfuseClient, DfuseClient, Stream } from '@dfuse/client';
import { streamSerumInstructionSubGraphql } from './gql';

type SerumInstructionOptions = {
  account: string
}

type UseSerumInstructionResponse = {
  instructions: Instruction[]
  isStreaming: boolean
  errors: GqlError[]
}

export type SideType = 'BID' | 'ASK' | 'UNKNOWN'
export type OrderType = 'LIMIT' | 'IMMEDIATE_OR_CANCEL' | 'POST_ONLY' | 'UNKNOWN'

export interface Account {
  publicKey: string
  isWritable: boolean
  isSigner: boolean
}

export type SerumInstruction =
  | UndecodedInstruction
  | InitializeMarket
  | NewOrder
  | MatchOrder
  | ConsumeEvents
  | CancelOrder
  | SettleFunds
  | CancelOrderByClientId

export interface UndecodedInstruction {
  __typename: 'UndecodedInstruction'
  programIDIndex: number
  accountCount: number
  rawAccounts: number[]
  dataLength: number
  data: string
  error: string
}

export interface InitializeMarket {
  __typename: 'SerumInitializeMarket'
  baseLotSize: number
  quoteLotSize: number
  feeRateBps: number
  vaultSignerNonce: number
  quoteDustThreshold: number

  accounts?: {
    market: Account
    splCoinToken: Account
    splPriceToken: Account
    coinMint: Account
    priceMint: Account
  }
}

export interface NewOrder {
  __typename: 'SerumNewOrder'
  side: SideType
  limitPrice: number
  maxQuantity: number
  orderType: OrderType
  clientID: number

  accounts?: {
    market: Account
    openOrders: Account
    requestQueue: Account
    payer: Account
    owner: Account
    coinVault: Account
    pcVault: Account
    splTokenProgram: Account
    rent: Account
    srmDiscount: Account | undefined
  }
}

export interface MatchOrder {
  __typename: 'SerumMatchOrder'
  limit: number

  accounts?: {
    market: Account
    requestQueue: Account
    eventQueue: Account
    bids: Account
    asks: Account
    coinFeeReceivable: Account
    pcFeeReceivable: Account
  }
}

export interface ConsumeEvents {
  __typename: 'SerumConsumeEvents'
  limit: number

  accounts?: {
    openOrders: Account[]
    market: Account
    eventQueue: Account
    coinFeeReceivable: Account
    pcFeeReceivable: Account
  }
}

export interface CancelOrder {
  __typename: 'SerumCancelOrder'
  side: SideType
  orderId: string
  openOrders: string
  openOrderSlot: number

  accounts?: {
    market: Account
    requestQueue: Account
    owner: Account
  }
}

export interface SettleFunds {
  __typename: 'SerumSettleFunds'

  accounts?: {
    market: Account
    openOrders: Account
    owner: Account
    coinVault: Account
    pcVault: Account
    coinWallet: Account
    pcWallet: Account
    signer: Account
    splTokenProgram: Account
    referrerPCWallet: Account | undefined
  }
}

export interface CancelOrderByClientId {
  __typename: 'SerumCancelOrderByClientId'
  clientID: number

  accounts?: {
    market: Account
    openOrders: Account
    requestQueue: Account
    owner: Account
  }
}


export interface Instruction {
  trxSignature: string
  trxError: boolean
  instruction: SerumInstruction
}

interface GqlError extends Error {
  message: string
  locations: unknown[]
}

const streamSerumInstructions = async (params: {
  account: string;
  onData: (data: Instruction) => void;
  onError: (errs) => void;
  onComplete: () => void;
  client: DfuseClient,
}): Promise<Stream> => {
  const { account, onData, onError, client } = params;
  let gqlErrors: GqlError[] = [];
  const stateStream = await client.graphql<{ serumInstructionHistory: Instruction }>(
    streamSerumInstructionSubGraphql,
    (message) => {
      if (message.type === 'error') {
        gqlErrors = message.errors.map((error) => stringToGqlError(error.message));
        onError(gqlErrors);
      } else if (message.type === 'data') {
        if (!message.data.serumInstructionHistory) {
          onError([{ name: 'GqlError', message: 'Unknown Instruction', locations: [] }]);
        } else {
          onData(message.data.serumInstructionHistory);
        }
      }
    },
    {
      variables: {
        account,
      },
    },
  );
  return stateStream as Stream;
};

const stringToGqlError = (input: string): GqlError => {
  const message = input;
  const re = />:([^:]*:[^:]*)/;
  const matches = input.match(re);
  let locations: string[] = [];
  if (matches) {
    locations = matches[1].split(':');
  }
  return {
    name: 'GqlError',
    message,
    locations,
  };
};

const client = createDfuseClient({
  apiKey: 'web_0123456789abcdef',
  network: 'mainnet.sol.dfuse.io',
  authUrl: 'null://',
  graphqlStreamClientOptions: {
    autoDisconnectSocket: false,
  },
});


export const useSerumInstruction = (
  params: SerumInstructionOptions,
): UseSerumInstructionResponse => {
  const { account } = params;
  const [instructions, setInstructions] = useState<Instruction[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [errors, setErrors] = useState<GqlError[]>([]);

  const streamInstructionCallback = useCallback(async () => {
    return streamSerumInstructions({
      client,
      account,
      onData: (data) => {
        setInstructions(prevState => {
          return [data, ...prevState];
        });
      },
      onComplete: () => {
        setIsStreaming(false)
      },
      onError: (errs) => {
        setErrors(errs)
      },
    });
  }, [account]);

  useEffect(() => {
    let s: Stream
    streamInstructionCallback().then((stream) => {
      setIsStreaming(true)
      s = stream;
    });
    return () => {
      s?.close();
    };
  }, [account, streamInstructionCallback]);

  return {
    instructions,
    isStreaming,
    errors,
  };

};

export const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

