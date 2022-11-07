export interface Immediate {}
export type Task<T extends any[]> = (...args: T) => void;
