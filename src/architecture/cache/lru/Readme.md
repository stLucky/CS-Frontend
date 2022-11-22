# architecture/cache/lru

Этот модуль предоставляет класс `LRUCache` для создания кэша:
  - в качестве алгоритма вытеснения из кэша используется `LRU`;
  - для достижения константного времени выполнения операций `get` и `set` под капотом используется класс `LinkedList`

## API

### set

Записывает в кэш значение по ключу

```js
import LRUCache from 'architecture/cache/lru';

const lruCache = new LRUCache(10);

lruCache.set('key', 1);
```

### get

Выдает значение по ключу

```js
import LRUCache from 'architecture/cache/lru';

const lruCache = new LRUCache(10);

lruCache.set('key', 1);

console.log(lruCache.get('key')) // 1
```

### has

Проверяет на наличие значения в кэше по ключу. Возвращает `true` если значение найдено, в противном случае возвращает `false`

```js
import LRUCache from 'architecture/cache/lru';

const lruCache = new LRUCache(10);

lruCache.set('key', 1);

console.log(lruCache.has('key')) // true
console.log(lruCache.has('unknown')) // false
```

### delete

Удаляет значение в кэше по ключу. Возвращает `true`, если значение существовало и было удалено, а если значение не существует - `false`

```js
import LRUCache from 'architecture/cache/lru';

const lruCache = new LRUCache(10);

lruCache.set('key', 1);

console.log(lruCache.has('key')) // true
console.log(lruCache.delete('key')) // true
console.log(lruCache.has('key')) // false
```