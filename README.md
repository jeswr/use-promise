# use-promise
React hook to resolve promises

## Usage

```tsx
import usePromise from 'use-promise';

const myPromise = (async () => 'my data')();

function MyReactComponent() {
  const data: string = usePromise(myPromise);
  return <div>{data}</div>
}
```

## License
©2021–present Jesse Wright, [MIT License](https://github.com/jeswr/use-promise/blob/master/LICENSE.md).
