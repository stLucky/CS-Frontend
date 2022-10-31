export const enum DefaultTimes {
  DELAY = 100,
  EXEC = 100,
}

export const enum WorkerStatuses {
  DONE = 'done',
  CONTINUE = 'continue',
  ERROR = 'error',
}

export interface WorkerResult {
  status: WorkerStatuses
  payload: number | Error | undefined
}
