import forEach from './for-each';

describe('forEach', () => {
  test('should correctly execute the callback on each iteration of the loop', () => {
    let total = 0;
    const LENGTH_ARR = 50e3;

    return forEach(new Array(LENGTH_ARR), () => {
      total++;
    }).then(() => {
      expect(total).toBe(LENGTH_ARR);
    });
  });

  test('should be caught in the promise error in the callback', () => {
    const ERROR_MESSAGE = 'oops';
    return forEach(new Array(50e3), () => {
      throw new Error(ERROR_MESSAGE);
    }).catch((err: Error) => {
      expect(err.message).toBe(ERROR_MESSAGE);
    });
  });
});
