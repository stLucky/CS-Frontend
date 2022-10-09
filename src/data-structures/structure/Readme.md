# data-structures/structure

Этот модуль предоставляет класс для создания структуры на основе массива

```js
import Structure from 'data-structures/structure'

const structure = Structure(['name', 'lastName', 'age']);

structure.set('name', 'Jack');
structure.set('lastName', 'Black');
structure.set('age', 53);

structure.get('name') // 'Jack'
structure.get('lastName') // 'Black'
structure.get('age') // '53'
structure.get('unknown') // Exception ReferenceError

```

## API

### set

Устанавливает по ключу значение в структуре

```js
import Structure from 'data-structures/structure'

const structure = Structure(['name']);

structure.set('name', 'Jack');
```

### get

Выдает по ключу значение из структуры

```js
import Structure from 'data-structures/structure'

const structure = Structure(['name']);

structure.set('name', 'Jack');

structure.get('name') // 'Jack'
```