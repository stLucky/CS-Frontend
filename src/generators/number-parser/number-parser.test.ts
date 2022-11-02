import numberParser from './number-parser';

describe('numberParser', () => {
  test('should accumulate the result of parsing and return this value', () => {
    const parser = numberParser();

    expect(parser.next('5')).toEqual({
      value: '5',
      done: false,
    });
    expect(parser.next('.')).toEqual({
      value: '5.',
      done: false,
    });
    expect(parser.next('2')).toEqual({
      value: '5.2',
      done: false,
    });
    expect(parser.next('e')).toEqual({
      value: '5.2e',
      done: false,
    });
    expect(parser.next('3')).toEqual({
      value: '5.2e3',
      done: false,
    });
    expect(parser.return()).toEqual({
      value: 5.2e3,
      done: true,
    });
  });

  test('the return method should return the accumulated value converted to the number type and done true', () => {
    const parser = numberParser();
    parser.next('-');
    parser.next('2');
    parser.next('e');
    parser.next('5');

    expect(parser.return()).toEqual({
      value: -2e5,
      done: true,
    });
  });

  test('should throw an exception when reading an incorrect number', () => {
    expect(() => numberParser().next('e')).toThrowError();
    expect(() => numberParser().next('w')).toThrowError();
    expect(() => numberParser().next('1-e')).toThrowError();
    expect(() => numberParser().next('1e.4')).toThrowError();
    expect(() => numberParser().next('2.3e-3-')).toThrowError();
  });
});
