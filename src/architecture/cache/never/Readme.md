# architecture/cache/never

Этот модуль предоставляет класс заглушку `NeverCache`

```js
import NeverCache from 'architecture/cache/lru';

const neverCache = new NeverCache(10);

neverCache.set('key', 1);

console.log(neverCache.get('key')); // undefined
console.log(neverCache.has('key')); // false
console.log(neverCache.delete('key')); // false
console.log(neverCache.has('key')); // false
```