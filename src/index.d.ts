type Nullable<T> = T | null | undefined;
type CanUndef<T> = T | undefined;

type ObjectKeys<T> =
  T extends object ? (keyof T)[] :
    T extends number ? [] :
      T extends Array<unknown> | string ? string[] :
        never;

interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>
}
