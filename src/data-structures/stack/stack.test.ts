import Stack from './stack';
import { IStack } from './interface';

describe('Stack', () => {
  let stack: IStack<number>;

  beforeEach(() => {
    stack = new Stack<number>(3);
  });

  test('should init correctly', () => {
    expect(stack.head).toBe(undefined);
  });

  test('should push correctly', () => {
    stack.push(10);

    expect(stack.head).toBe(10);
  });

  describe('Stack with data', () => {
    beforeEach(() => {
      stack.push(10);
      stack.push(11);
      stack.push(12);
    });

    test('should pop correctly', () => {
      expect(stack.head).toBe(12);
    });

    test('should push to Stack overflow', () => {
      expect(() => {
        stack.push(10);
      }).toThrow('Stack overflow');
    });

    test('should pop to Stack empty', () => {
      stack.pop();
      stack.pop();
      stack.pop();

      expect(() => {
        stack.pop();
      }).toThrow('Stack empty');
    });
  });
});
