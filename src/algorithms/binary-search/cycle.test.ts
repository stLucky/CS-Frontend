import binarySearch from './cycle';

describe('CycleBinarySearch', () => {
  const arr = [-10, -5, 1, 3, 10, 456];

  test('should find correctly', () => {
    const res1 = binarySearch(10, arr);
    const res2 = binarySearch(-10, arr);
    const res3 = binarySearch(2568, arr);

    expect(res1).toBe(4);
    expect(res2).toBe(0);
    expect(res3).toBe(null);
  });
});
