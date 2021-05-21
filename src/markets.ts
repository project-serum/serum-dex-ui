import { PublicKey } from '@solana/web3.js';
import Markets from './markets.json';
import TokenMints from './token-mints.json';

export const PROGRAM_LAYOUT_VERSIONS = {
  '4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn': 1,
  BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg: 1,
  EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o: 2,
  '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin': 3,
};

export function getLayoutVersion(programId: PublicKey) {
  return PROGRAM_LAYOUT_VERSIONS[programId.toString()] || 3;
}

export const TOKEN_MINTS: Array<{
  address: PublicKey;
  name: string;
}> = TokenMints.map((mint) => {
  return {
    address: new PublicKey(mint.address),
    name: mint.name,
  };
});

export const MARKETS: Array<{
  address: PublicKey;
  name: string;
  programId: PublicKey;
  deprecated: boolean;
}> = Markets.map((market) => {
  return {
    address: new PublicKey(market.address),
    name: market.name,
    programId: new PublicKey(market.programId),
    deprecated: market.deprecated,
  };
});
