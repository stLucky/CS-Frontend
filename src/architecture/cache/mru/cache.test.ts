import MRUCache from './cache';

describe('MRUCache', () => {
  test('should delete the values to which there were the most requests when the cache overflows', () => {
    const mruCache = new MRUCache(4);
    mruCache.set('key_1', 10);
    mruCache.set('key_2', 20);
    mruCache.set('key_3', 30);
    mruCache.set('key_4', 40);

    mruCache.get('key_1');
    mruCache.get('key_2');
    mruCache.get('key_4');

    mruCache.set('key_5', 50);

    expect(mruCache.has('key_4')).toBeFalsy();

    mruCache.get('key_1');
    mruCache.set('key_6', 60);

    expect(mruCache.has('key_1')).toBeFalsy();
  });
});
