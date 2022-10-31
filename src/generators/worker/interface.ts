export const enum DefaultTimes {
  DELAY = 100,
  EXEC = 100,
}

export interface IWorker {
  run(resolve: (v?: any) => void, reject: (r?: any) => void): void
  recalculateExecTime(time: number): void
}
