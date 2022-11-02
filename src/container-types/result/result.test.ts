import Result from './result';

describe('Result', () => {
  let result: Result<number>;

  beforeEach(() => {
    result = new Result(() => 10);
  });

  test('should map return a new value', (done) => {
    result
      .map((val) => val * 2)
      .map((val) => {
        try {
          expect(val).toBe(20);
          done();
        } catch (err) {
          done(err);
        }
      });
  });

  test('should flatMap unpack the value from the wrapper and return it', (done) => {
    result
      .flatMap((val) => new Result(() => val * 10))
      .map((val) => {
        try {
          expect(val).toBe(100);
          done();
        } catch (err) {
          done(err);
        }
      });
  });

  test('should catch the error with the correct content', (done) => {
    result
      .map((el) => el * 2)
      .flatMap((el) => Result.error(el))
      .catch((err) => {
        try {
          expect(() => { throw err; }).toThrowError('20');
          done();
        } catch (error) {
          done(error);
        }
      });
  });

  test('catch should return new data', (done) => {
    result
      .map((el) => Result.error(el))
      .flatMap((el) => Result.error(el))
      .catch(() => 'new data')
      .map((val) => {
        try {
          expect(val).toBe('new data');
          done();
        } catch (err) {
          done(err);
        }
      });
  });
});
