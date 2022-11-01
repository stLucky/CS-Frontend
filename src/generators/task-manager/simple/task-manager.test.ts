import SimpleTaskManager from './task-manager';

describe('SimpleTaskManager', () => {
  let taskManager: SimpleTaskManager;

  beforeEach(() => {
    taskManager = new SimpleTaskManager();
  });

  test('should correctly execute the callback on each iteration of the loop', () => {
    let total = 0;
    const LENGTH_ARR = 50e4;

    return taskManager.forEach(new Array(LENGTH_ARR), () => {
      total++;
    }).then(() => {
      expect(total).toBe(LENGTH_ARR);
    });
  });

  test('should correctly execute the callback on each iteration of the loop for each task', () => {
    let firstTaskRes = 0;
    let secondTaskRes = 0;

    const LENGTH_FIRST_ARR = 50e4;
    const LENGTH_SECOND_ARR = 70e4;

    const results: number[] = [];

    const firstTask = taskManager
      .forEach(new Array(LENGTH_FIRST_ARR), () => {
        firstTaskRes++;
      })
      .then(() => {
        results.push(firstTaskRes);
      });

    const secondTask = taskManager
      .forEach(new Array(LENGTH_SECOND_ARR), () => {
        secondTaskRes++;
      })
      .then(() => {
        results.push(secondTaskRes);
      });

    Promise.all([firstTask, secondTask]).then(() => {
      expect(results).toEqual([LENGTH_FIRST_ARR, LENGTH_SECOND_ARR]);
    });
  });

  test('should be caught in the promise error in the callback', () => {
    const ERROR_MESSAGE = 'oops';

    return taskManager.forEach(new Array(50e4), () => {
      throw new Error(ERROR_MESSAGE);
    }).catch((err: Error) => {
      expect(err.message).toBe(ERROR_MESSAGE);
    });
  });
});
