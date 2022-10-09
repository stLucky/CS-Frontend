export interface IStructure {
  set<T = unknown>(key: string, value: T): void;
  get<T = unknown>(key: string): T
}
