import { useReducer, useEffect } from 'react';

export default function usePromise<T>(promise: Promise<T>): T | undefined {
  const [resolved, dispatch] = useReducer(
    (s: T | undefined, a: T | undefined) => a,
    undefined);
  useEffect(() => {
    (async () => {
      try {
        const resolvedValue = await promise;
        dispatch(resolvedValue);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    })();
    // @ts-ignore
  }, [promise[Symbol.name]]);
  return resolved as T | undefined;
}
