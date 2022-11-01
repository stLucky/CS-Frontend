import Result from './result';

describe('Result', () => {
  let result: Result<number>;

  beforeEach(() => {
    result = new Result(() => 10);
  });

  test('should map return a new value', () => {
    result
      .map((val) => val * 2)
      .map((val) => expect(val).toBe(20));
  });

  test('should flatMap unpack the value from the wrapper and return it', () => {
    result
      .flatMap((val) => new Result(() => val * 10))
      .map((val) => expect(val).toBe(100));
  });

  test('should catch the error with the correct content', () => {
    result
      .map((el) => el * 2)
      .flatMap((el) => Result.error(el))
      .catch((err) => expect(err).toThrowError('20'));
  });

  test('catch should return new data', () => {
    result
      .map((el) => Result.error(el))
      .flatMap((el) => Result.error(el))
      .catch(() => 'new data')
      .map((val) => expect(val).toBe('new data'));
  });
});
