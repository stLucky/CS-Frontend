import LRUCache from './cache';

describe('LRUCache', () => {
  let lruCache: LRUCache<string, number>;

  beforeEach(() => {
    lruCache = new LRUCache(4);
    lruCache.set('key_1', 10);
  });

  test('should return a value from the cache', () => {
    expect(lruCache.get('key_1')).toBe(10);
  });

  test('should return true for an existing value', () => {
    expect(lruCache.has('key_1')).toBeTruthy();
  });

  test('should return false for a non-existing value', () => {
    expect(lruCache.has('key_2')).toBeFalsy();
  });

  test('should successfully delete an existing value in the cache', () => {
    expect(lruCache.delete('key_1')).toBeTruthy();
    expect(lruCache.has('key_1')).toBeFalsy();
  });

  test('should delete the first added value when the cache overflows if there were no requests', () => {
    lruCache.set('key_2', 20);
    lruCache.set('key_3', 30);
    lruCache.set('key_4', 40);
    lruCache.set('key_5', 50);

    expect(lruCache.has('key_1')).toBeFalsy();
  });

  test('should delete the values to which there were the least requests when the cache overflows', () => {
    lruCache.set('key_2', 20);
    lruCache.set('key_3', 30);
    lruCache.set('key_4', 40);

    lruCache.get('key_1');
    lruCache.get('key_2');
    lruCache.get('key_4');

    lruCache.set('key_5', 50);

    expect(lruCache.has('key_3')).toBeFalsy();

    lruCache.get('key_1');
    lruCache.set('key_6', 60);

    expect(lruCache.has('key_2')).toBeFalsy();
  });
});
