import { useEffect, useRef } from "react";
import { Observable } from "rxjs";

export function useSubscribe<T>(
  observable: Observable<T>,
  fn: (value: T) => void
) {
  const fnRef = useRef<(value: T) => void>(fn);
  fnRef.current = fn;

  useEffect(() => {
    const subs = observable.subscribe((value) => fnRef.current(value));
    return () => subs.unsubscribe();
  }, [observable]);
}
