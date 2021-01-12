import { useReducer, useEffect } from 'react';

export default function usePromise<T>(promise: Promise<T>): T | undefined {
  const [resolved, dispatch] = useReducer((s: undefined | T, a: T) => a, undefined);
  useEffect(() => {
    (async () => {
      try {
        const resolvedValue = await promise;
        dispatch(resolvedValue);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, [promise[Symbol.name]]);
  return resolved as T | undefined;
}
