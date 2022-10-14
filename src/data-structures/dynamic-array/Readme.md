# data-structures/dynamic-array

Этот модуль предоставляет 2 класса:
  - DynamicArray - расширяемый массив на основе связанного списка;
  - 


## API

### DynamicArray

#### add

Добавляет элемент в конец массива и возвращает новую длину массива

```js
import DynamicArray from 'data-structures/dynamic-array/linked-list';

const arr = new DynamicArray(3 /* Размер фиксированного массива в списке */);

arr.add(1); // 1
arr.add(23); // 2
```

#### get

Получает элемент по индексу

```js
import DynamicArray from 'data-structures/dynamic-array/linked-list';

const arr = new DynamicArray(3);

arr.add(1); // 1
arr.add(23); // 23

console.log(arr.get(0));  // 1
console.log(arr.get(1));  // 23
```

#### length

Длина массива

```js
import DynamicArray from 'data-structures/dynamic-array/linked-list';

const arr = new DynamicArray(3);
  
arr.add(1); // 1
arr.add(23); // 23

console.log(arr.length); // 2
```
