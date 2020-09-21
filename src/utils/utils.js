import { useCallback, useEffect, useState } from 'react';
import { PublicKey } from '@solana/web3.js';

export function isValidPublicKey(key) {
  if (!key) {
    return false;
  }
  try {
    new PublicKey(key);
    return true;
  } catch {
    return false;
  }
}

export async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const percentFormat = new Intl.NumberFormat(undefined, {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function floorToDecimal(value, decimals) {
  return decimals ? Math.floor(value * 10 ** decimals) / 10 ** decimals : value;
}

export function roundToDecimal(value, decimals) {
  return decimals ? Math.round(value * 10 ** decimals) / 10 ** decimals : value;
}

export function getDecimalCount(value) {
  if (!isNaN(value) && Math.floor(value) !== value)
    return value.toString().split('.')[1].length || 0;
  return 0;
}

export function useLocalStorageState(key, defaultState = null) {
  const [state, setState] = useState(() => {
    // NOTE: Not sure if this is ok
    const storedState = localStorage.getItem(key);
    if (storedState) {
      return JSON.parse(storedState);
    }
    return defaultState;
  });

  const setLocalStorageState = useCallback(
    (newState) => {
      const changed = state !== newState;
      if (!changed) {
        return;
      }
      setState(newState);
      if (newState === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newState));
      }
    },
    [state, key],
  );

  return [state, setLocalStorageState];
}

export function useEffectAfterTimeout(effect, timeout) {
  useEffect(() => {
    const handle = setTimeout(effect, timeout);
    return () => clearTimeout(handle);
  });
}

export function useListener(emitter, eventName) {
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const listener = () => forceUpdate((i) => i + 1);
    emitter.on(eventName, listener);
    return () => emitter.removeListener(eventName, listener);
  }, [emitter, eventName]);
}

export function abbreviateAddress(address) {
  const base58 = address.toBase58();
  return base58.slice(0, 4) + '…' + base58.slice(-4);
}

export function isEqual(obj1, obj2, keys) {
  if (!keys && Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  keys = keys || Object.keys(obj1);
  for (const k of keys) {
    if (obj1[k] !== obj2[k]) {
      // shallow comparison
      return false;
    }
  }
  return true;
}
