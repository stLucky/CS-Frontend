import Worker from './worker';

describe('Worker', () => {
  const ARRAY_LENGTH = 50e3;
  let resolve: jest.Mock<any, any>;
  let reject: jest.Mock<any, any>;

  beforeEach(() => {
    resolve = jest.fn();
    reject = jest.fn();
  });

  test('should correctly execute the callback on each iteration', () => {
    let total = 0;

    const worker = new Worker(new Array(ARRAY_LENGTH), () => {
      total++;
    });

    worker.run(resolve, reject);
    expect(total).toBe(ARRAY_LENGTH);
  });

  test('should resolve on successful completion of all tasks', () => {
    const worker = new Worker(new Array(ARRAY_LENGTH), () => {});

    worker.run(resolve, reject);

    expect(resolve).toBeCalled();
    expect(reject).not.toBeCalled();
  });

  test('should be rejected when an error occurs in the task', () => {
    const error = new Error('oops');

    const worker = new Worker(new Array(ARRAY_LENGTH), () => {
      throw error;
    });

    worker.run(resolve, reject);

    expect(reject).toBeCalled();
    expect(resolve).not.toBeCalled();
  });
});
