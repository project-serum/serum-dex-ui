import { useRef, useEffect } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
