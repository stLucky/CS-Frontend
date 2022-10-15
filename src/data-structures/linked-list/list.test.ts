import LinkedList from './list';

describe('LinkedList', () => {
  test('should init correctly', () => {
    const list = new LinkedList<number>();

    expect(list.first).toBe(undefined);
    expect(list.last).toBe(undefined);
    expect(list.length).toBe(0);
  });

  test('should push correctly', () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(10);
    list.push(30);

    expect(list.first).toBe(1);
    expect(list.last).toBe(30);
    expect(list.length).toBe(3);
  });

  describe('LinkedList with data', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
      list = new LinkedList<number>();
      list.push(1);
      list.push(10);
      list.push(30);
    });

    test('should be iterable', () => {
      expect(Array.from(list)).toEqual([1, 10, 30]);
    });

    test('should be reverse iterable', () => {
      expect(Array.from(list.reversed())).toEqual([30, 10, 1]);
    });

    test('should pop correctly', () => {
      list.pop();

      expect(Array.from(list)).toEqual([1, 10]);
    });

    test('should shift correctly', () => {
      list.shift();

      expect(Array.from(list)).toEqual([10, 30]);
    });

    test('should unshift correctly', () => {
      list.unshift(76);

      expect(Array.from(list)).toEqual([76, 1, 10, 30]);
    });

    test('should includes correctly', () => {
      expect(list.includes(10)).toBeTruthy();
    });
  });
});
