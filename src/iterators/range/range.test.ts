import Range from './range';

describe('Range', () => {
  describe('String Range', () => {
    const symbolRange = new Range<string>('а', 'г');
    test('should create a string range from -> to', () => {
      expect(Array.from(symbolRange)).toEqual(['а', 'б', 'в', 'г']);
    });

    test('should create a reverse string range to -> from', () => {
      expect(Array.from(symbolRange.reverse())).toEqual(['г', 'в', 'б', 'а']);
    });

    test('should create a empty range when the first argument code is greater than the second argument', () => {
      const innerSymbolRange = new Range<string>('г', 'а');

      expect(Array.from(innerSymbolRange)).toEqual([]);
    });
  });

  describe('Number Range', () => {
    const numberRange = new Range<number>(-2, 3);
    test('should create a number range from -> to', () => {
      expect(Array.from(numberRange)).toEqual([-2, -1, 0, 1, 2, 3]);
    });

    test('should create a reverse number range to -> from', () => {
      expect(Array.from(numberRange.reverse())).toEqual([3, 2, 1, 0, -1, -2]);
    });

    test('should create a empty range when the first argument code is greater than the second argument', () => {
      const innerNumberRange = new Range<number>(10, 1);

      expect(Array.from(innerNumberRange)).toEqual([]);
    });
  });
});
