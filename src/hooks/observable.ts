import { useState } from "react";
import { Observable } from "rxjs";
import { useSubscribe } from "./subscribe";

export function useObservable<T>(observable: Observable<T>, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);
  useSubscribe(observable, setValue);
  return value;
}
