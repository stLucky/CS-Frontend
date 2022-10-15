import VectorDynamicArray from './index';

describe('ListDynamicArray', () => {
  test('should init correctly', () => {
    const array = new VectorDynamicArray<number>();

    expect(array.length).toBe(0);
    expect(array.get(1)).toBe(null);
  });

  test('should add correctly', () => {
    const array = new VectorDynamicArray<number>();

    array.add(10);

    expect(array.length).toBe(1);
  });

  test('should get correctly', () => {
    const array = new VectorDynamicArray<number>();

    array.add(10);
    array.add(3);
    array.add(50);
    array.add(540);

    expect(array.get(2)).toBe(50);
    expect(array.get(5)).toBe(null);
  });
});
