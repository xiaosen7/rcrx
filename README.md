# Rcrx

Rcrx is a lightweight library that provides Rx.js utilities for React applications. It offers a set of hooks to seamlessly integrate RxJS observables into React components, making it easier to manage and react to asynchronous data streams in your React applications.

Key features:

- Simple integration of RxJS observables in React components
- Automatic subscription management
- TypeScript support for improved developer experience
- Minimal API surface for ease of use

With Rcrx, you can effortlessly handle complex asynchronous operations and state management in your React applications using the power of RxJS observables.

## Exports

### useObservable

Example:

```tsx
import { useObservable } from "rcrx";

const observable = new Observable<number>((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    subscriber.next(count++);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});

function Counter() {
  const count = useObservable(observable);
  return <div>{count}</div>;
}
```

### useSubscribe

Example:

```tsx
import { useSubscribe } from "rcrx";

const observable = new Observable<number>((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    subscriber.next(count++);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});

function Counter() {
  const [count, setCount] = useState(0);

  useSubscribe(observable, (value) => {
    setCount(value);
  });

  return <div>{count}</div>;
}
```
