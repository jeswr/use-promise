# use-promise
React hook to resolve promises

[![GitHub license](https://img.shields.io/github/license/jeswr/use-promise.svg)](https://github.com/jeswr/use-promise/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/use-promise.svg)](https://www.npmjs.com/package/use-promise)
[![build](https://img.shields.io/github/workflow/status/jeswr/use-promise/Node.js%20CI)](https://github.com/jeswr/use-promise/tree/main/)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)
[![Downloads](https://img.shields.io/github/downloads/jeswr/use-promise/total)](https://img.shields.io/github/downloads/jeswr/use-promise/total)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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
©2021–present [Jesse Wright](https://github.com/jeswr), [MIT License](https://github.com/jeswr/use-promise/blob/main/LICENSE).
