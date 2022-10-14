import DynamicArray from './array';

describe('DynamicArray', () => {
  test('should init correctly', () => {
    const array = new DynamicArray<number>(3);

    expect(array.length).toBe(0);
    expect(array.get(1)).toBe(null);
  });

  test('should add correctly', () => {
    const array = new DynamicArray<number>(3);

    array.add(1);

    expect(array.length).toBe(1);
  });

  test('should get correctly', () => {
    const array = new DynamicArray<number>(3);

    array.add(1);
    array.add(2);
    array.add(5);
    array.add(6);

    expect(array.get(2)).toBe(5);
    expect(array.get(6)).toBe(null);
  });
});
