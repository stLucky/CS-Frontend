import HashMap from './hash-map';
import { IHashMap } from './interface';

describe('HashMap', () => {
  test('should init correctly', () => {
    const map = new HashMap();

    expect(map.get(1)).toBe(null);
  });

  describe('HashMap', () => {
    let map: IHashMap;

    beforeEach(() => {
      map = new HashMap();
      map.set('foo', 'bar');
      map.set(10, 10000);
      map.set('baz', 'cool');
    });

    test('should get correctly', () => {
      expect(map.get('foo')).toBe('bar');
    });

    test('should entries correctly', () => {
      expect([...map.entries()]).toEqual([['foo', 'bar'], ['10', 10000], ['baz', 'cool']]);
    });

    test('should keys correctly', () => {
      expect([...map.keys()]).toEqual(['foo', '10', 'baz']);
    });

    test('should values correctly', () => {
      expect([...map.values()]).toEqual(['bar', 10000, 'cool']);
    });
  });
});
