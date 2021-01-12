import { renderHook, act } from '@testing-library/react-hooks';
import usePromise from '../lib';

const myPromise = (async () => 'my data')();

test('should increment counter', () => {
  // expect.assertions(1);
  act(() => {
    const { result } = renderHook(() => usePromise(myPromise));
    let r: string | undefined;
    setTimeout(() => {
      r = result.current;
      expect(r).toEqual('my data');
    }, 10);
    // result = renderHook(() => usePromise(myPromise)).result.current;
  });
});
