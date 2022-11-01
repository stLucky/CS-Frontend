export const enum DefaultTimes {
  DELAY = 100,
  EXEC = 100,
}

export interface ISimpleWorker {
  executor: Generator<number | Error>
  recalculateExecTime(time: number): void
}

export interface IWorker extends ISimpleWorker {
  run(resolve: (v?: any) => void, reject: (r?: any) => void): void
}
