import { generateRandom } from './helpers';
import {
  enumerate, filter, mapSeq, random, seq, take, zip,
} from './utils';

describe('Utils', () => {
  let randomInteger: number;

  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
    randomInteger = generateRandom(0, 100);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  describe('random', () => {
    test('should return an iterator to generate random numbers given the given parameters', () => {
      const randomInt = random(0, 100);

      expect(randomInt.next()).toEqual({
        value: randomInteger,
        done: false,
      });
    });
  });

  describe('take', () => {
    test('should return an iterator over the given number of its elements', () => {
      const randomInt = random(0, 100);

      expect([...take(randomInt, 3)]).toEqual([randomInteger, randomInteger, randomInteger]);
    });
  });

  describe('filter', () => {
    test('should return an iterator over the elements that satisfy the predicate', () => {
      const randomInt = random(0, 100);

      expect([...take(filter(randomInt, (el) => el > 30), 3)])
        .toEqual([]);

      expect([...take(filter(randomInt, (el) => el < 30), 3)])
        .toEqual([randomInteger, randomInteger, randomInteger]);
    });
  });

  describe('enumerate', () => {
    test('should return an iterator over pairs of (iteration number, element)', () => {
      const randomInt = random(0, 100);

      expect([...enumerate(take(randomInt, 3))])
        .toEqual([[0, randomInteger], [1, randomInteger], [2, randomInteger]]);
    });
  });

  describe('seq', () => {
    test('should return an iterator over the elements of the iterated objects', () => {
      expect([...seq([1, 2], new Set([3, 4]), 'bla')])
        .toEqual([1, 2, 3, 4, 'b', 'l', 'a']);
    });
  });

  describe('zip', () => {
    test('should return an iterator over tuples of elements of the iterated objects', () => {
      expect([...zip([1, 2], new Set([3, 4]), 'bl')])
        .toEqual([[1, 3, 'b'], [2, 4, 'l']]);
    });
  });

  describe('mapSeq', () => {
    test('should return an iterator where each element of the left Iterable is subsequently applied to all functions from the right', () => {
      expect([...mapSeq([1, 2, 3], [(el: number) => el * 2, (el: number) => el - 1])])
        .toEqual([1, 3, 5]);
    });
  });
});
