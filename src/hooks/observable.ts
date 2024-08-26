import { useState } from "react";
import { Observable } from "rxjs";
import { useSubscribe } from "./subscribe";

export function useObservable<T>(observable: Observable<T>) {
  const [value, setValue] = useState<T>();
  useSubscribe(observable, setValue);
  return value;
}
