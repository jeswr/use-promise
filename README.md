# use-promise
React hook to resolve promises

## Usage

The output of the hook is `undefined` whilst the promise is unresolved or rejected. When the promise resolves, the output of the hook is the resolved value of the promise.

```tsx
import usePromise from 'use-promise';

const myPromise = (async () => 'my data')();

function MyReactComponent() {
  // usePromise(myPromise) is either 'my data' or undefined
  const data: string = usePromise(myPromise) ?? '';
  return <div>{data}</div>
}
```

## License
©2021–present Jesse Wright, [MIT License](https://github.com/jeswr/use-promise/blob/master/LICENSE.md).
