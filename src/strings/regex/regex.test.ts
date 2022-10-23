import {
  isValidName, split, format, removeDuplicates, calc,
} from './regex';

describe('regex', () => {
  describe('isValidName', () => {
    test('should return true when passed a correct string', () => {
      const res1 = isValidName('hello');
      const res2 = isValidName('hello123');
      const res3 = isValidName('$_34');

      expect(res1).toBeTruthy();
      expect(res2).toBeTruthy();
      expect(res3).toBeTruthy();
    });

    test('should return false when passed a incorrect string', () => {
      const res1 = isValidName('123hello');
      const res2 = isValidName('привет');
      const res3 = isValidName('$привет2');

      expect(res1).toBeFalsy();
      expect(res2).toBeFalsy();
      expect(res3).toBeFalsy();
    });
  });

  describe('split', () => {
    test('should return an array by separator', () => {
      const res1 = split('foo    bla.bar,gd;4');
      const res2 = split('hello|world@foo', '[|@]');

      expect(res1).toEqual(['foo', 'bla', 'bar', 'gd', '4']);
      expect(res2).toEqual(['hello', 'world', 'foo']);
    });
  });

  describe('format', () => {
    test('should apply data to a string pattern', () => {
      const res1 = format('Hello, ${user}! Your age is ${age}.', { user: 'Bob', age: 10 });
      const res2 = format('Hello, ${user}! Your age is ${age}.', { age: 10 });

      expect(res1).toBe('Hello, Bob! Your age is 10.');
      expect(res2).toBe('Hello, ${user}! Your age is 10.');
    });
  });

  describe('removeDuplicates', () => {
    test('should remove from the string any duplicates of substrings of the 1st, 2nd or 3rd characters that go in a row', () => {
      const res1 = removeDuplicates('aaaabbbbczzzz');
      const res2 = removeDuplicates('abababbbabcabc');
      const res3 = removeDuplicates('foofoobabaaaazze');

      expect(res1).toBe('abcz');
      expect(res2).toBe('abbabc');
      expect(res3).toBe('foobaaze');
    });
  });

  describe('calc', () => {
    test('should find arithmetic operations in a string and replace with the result', () => {
      const res1 = calc(`
      Какой-то текст (10 + 15 - 24) ** 2
      Еще какой-то текст 2 * 10
      `);
      const res2 = calc('Посчитай 10 % 2. Затем найди (45 / 5 + 6) ** 2');
      // const res3 = removeDuplicates('foofoobabaaaazze');

      expect(res1).toBe(`
      Какой-то текст 1
      Еще какой-то текст 20
      `);
      expect(res2).toBe('Посчитай 0. Затем найди 225');
    });
  });
});
