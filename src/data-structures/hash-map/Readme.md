# data-structures/hash-map

Этот модуль предоставляет класс для создания хеш-таблицы. Метод разрешения коллизий - метод цепочек.

```js
import HashMap from 'data-structures/hash-map';

const map = new HashMap();

map.set('foo', 'bar');
map.set(10, 'bla');

console.log(map.get('foo')); // 'bar'
console.log(map.get(10));    // 'bla'
```

## API

### set

Принимает два параметра - ключ и значение. Устанавливает по ключу значение.

```js
import HashMap from 'data-structures/hash-map';

const map = new HashMap();

map.set('foo', 'bar');
```

### get

Выдает значение по ключу

```js
import HashMap from 'data-structures/hash-map';

const map = new HashMap();

map.set('foo', 'bar');


console.log(map.get('foo')); // 'bar'
```

### entries

Возвращает генератор с парами [ключ, значение]

```js
import HashMap from 'data-structures/hash-map';

const map = new HashMap();

map.set('foo', 'bar');
map.set(10, 10000);
map.set('baz', 'cool');


console.log([...map.entries()]); // [['foo', 'bar'], ['10', 10000], ['baz', 'cool']]
```

### keys

Возвращает генератор с ключами

```js
import HashMap from 'data-structures/hash-map';

const map = new HashMap();

map.set('foo', 'bar');
map.set(10, 10000);
map.set('baz', 'cool');


console.log([...map.keys()]); // ['foo', '10', 'baz']
```

### values

Возвращает генератор со значениями

```js
import HashMap from 'data-structures/hash-map';

const map = new HashMap();

map.set('foo', 'bar');
map.set(10, 10000);
map.set('baz', 'cool');


console.log([...map.values()]); // ['bar', 10000, 'cool']
```


