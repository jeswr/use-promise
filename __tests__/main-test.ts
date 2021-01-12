import { renderHook, act } from '@testing-library/react-hooks';
import usePromise from '../lib';

const myPromise = (async () => 'my data')();

const rejecting = new Promise((resolve, reject) => {
  try {
    throw new Error('Mock Error');
  } catch (e) {
    reject(e);
  }
  resolve('Resolving Promise');
});

test('should increment counter', () => {
  expect.assertions(2);
  act(() => {
    const { result } = renderHook(() => usePromise(myPromise));
    setTimeout(() => {
      expect(result.current).toEqual('my data');
    }, 10);
  });
  act(() => {
    const { result } = renderHook(() => usePromise(rejecting));
    setTimeout(() => {
      expect(result.current).rejects.toEqual('Mock Error');
    }, 10);
  });
});
