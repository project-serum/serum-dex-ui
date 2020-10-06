import { Connection } from '@solana/web3.js';

export interface ConnectionContextValues {
    endpoint: string;
    setEndpoint: (newEndpoint: string) => void;
    connection: Connection;
    sendConnection: Connection;
}
