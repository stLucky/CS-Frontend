import PriorityTaskManager from './task-manager';

describe('SimpleTaskManager', () => {
  let taskManager: PriorityTaskManager;
  const LENGTH_ARR = 1e4;

  beforeEach(() => {
    taskManager = new PriorityTaskManager();
  });

  test('should correctly execute the callback on each iteration of the loop', () => {
    let total = 0;

    return taskManager.forEach(new Array(LENGTH_ARR), () => {
      total++;
    }).then(() => {
      expect(total).toBe(LENGTH_ARR);
    });
  });

  test('should complete tasks in priority order', () => {
    let lowResult = 0;
    let averageResult = 0;
    let highResult = 0;
    let criticalResult = 0;

    const results: number[] = [];

    const lowTask = taskManager
      .forEach(new Array(LENGTH_ARR), () => {
        lowResult += 1;
      }, { priority: 'low' })
      .then(() => {
        results.push(lowResult);
      });

    const averageTask = taskManager
      .forEach(new Array(LENGTH_ARR), () => {
        averageResult += 2;
      })
      .then(() => {
        results.push(averageResult);
      });

    const highTask = taskManager
      .forEach(new Array(LENGTH_ARR), () => {
        highResult += 3;
      }, { priority: 'high' })
      .then(() => {
        results.push(highResult);
      });

    const criticalTask = taskManager
      .forEach(new Array(LENGTH_ARR), () => {
        criticalResult += 4;
      }, { priority: 'critical' })
      .then(() => {
        results.push(criticalResult);
      });

    Promise.all([lowTask, averageTask, highTask, criticalTask]).then(() => {
      expect(results).toEqual([4e4, 3e4, 2e4, 1e4]);
    });
  });

  test('should be caught in the promise error in the callback', () => {
    const ERROR_MESSAGE = 'oops';

    return taskManager.forEach(new Array(LENGTH_ARR), () => {
      throw new Error(ERROR_MESSAGE);
    }).catch((err: Error) => {
      expect(err.message).toBe(ERROR_MESSAGE);
    });
  });
});
