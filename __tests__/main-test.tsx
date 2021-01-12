import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import usePromise from '../lib';

const myPromise = (async () => 'my data')();

describe('main test suite', () => {
  let container: HTMLDivElement | Element | HTMLDivElement | null = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container as HTMLDivElement | Element | HTMLDivElement);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container as HTMLDivElement | Element | HTMLDivElement);
    container?.remove();
    container = null;
  });

  it('Resolves the promise', () => {
    function MyReactComponent() {
      const data = usePromise(myPromise);
      return <div>{data}</div>;
    }
    act(() => { render(<MyReactComponent />, container); });
    expect(container?.textContent).toBe('my data');
  });
});
