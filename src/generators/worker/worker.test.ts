import Worker from './worker';

describe('Worker', () => {
  const ARRAY_LENGTH = 50e3;

  test('should correctly execute the callback on each iteration', () => {
    let total = 0;

    const worker = new Worker(new Array(ARRAY_LENGTH), () => {
      total++;
    });

    worker.run();
    expect(total).toBe(ARRAY_LENGTH);
  });

  test('should return WorkerResult interface object with status done and undefined payload', () => {
    const worker = new Worker(new Array(ARRAY_LENGTH), () => {});

    worker.run();

    const result = worker.run();

    expect(result).toEqual({
      status: 'done',
      payload: undefined,
    });
  });

  test('should return WorkerResult interface object with status error and Error payload when the callback has an error', () => {
    const error = new Error('oops');

    const worker = new Worker(new Array(ARRAY_LENGTH), () => {
      throw error;
    });

    worker.run();

    const result = worker.run();

    expect(result).toEqual({
      status: 'error',
      payload: error,
    });
  });
});
