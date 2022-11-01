export const toError = (err: unknown): Error =>
  err instanceof Error ? err : new Error(String(err))
