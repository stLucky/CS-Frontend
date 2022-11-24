import NeverCache from './cache';

describe('NeverCache', () => {
  test('should not write data to the cache ', () => {
    const neverCache = new NeverCache();
    expect(neverCache.has('key')).toBe(false);

    neverCache.set('key', 1);

    expect(neverCache.get('key')).toBeUndefined();
    expect(neverCache.has('key')).toBe(false);
    expect(neverCache.delete('key')).toBe(false);
    expect(neverCache.has('key')).toBe(false);
  });
});
