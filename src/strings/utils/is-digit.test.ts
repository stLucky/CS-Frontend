import isDigit from './is-digit';

describe('isDigit', () => {
  test('should return true when passed a string of ascii digits', () => {
    const res = isDigit('123');

    expect(res).toBeTruthy();
  });

  test('should return true when passed a string of number forms', () => {
    const res = isDigit('Ⅻ');

    expect(res).toBeTruthy();
  });

  test('should return true when passed a string of common indic number forms', () => {
    const res = isDigit('꠵');

    expect(res).toBeTruthy();
  });

  test('should return false when passed a string of mixed ranges of numbers', () => {
    const res = isDigit('123Ⅻ');

    expect(res).toBeFalsy();
  });

  test('should return false when passed a string that has non-numeric characters', () => {
    const res = isDigit('123sdf');

    expect(res).toBeFalsy();
  });
});
