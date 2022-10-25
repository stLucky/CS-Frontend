# iterators/utils

Этот модуль предоставляет набор утилитарных функций

## random

`random` - функция, возвращающая итератор для генерации случайных чисел по заданным параметрам

```js
import { random } from 'iterators/utils';

const randomInt = random(0, 100);

console.log(randomInt.next());
console.log(randomInt.next());
console.log(randomInt.next());
console.log(randomInt.next());
```

## take

`take` - функция, которая принимает любой Iterable объект и возвращает итератор по заданному количеству его элементов


```js
import { random, take } from 'iterators/utils'';

const randomInt = random(0, 100);
console.log([...take(randomInt, 15)]);
```

## filter

`filter` - функция, которая принимает любой Iterable объект и функцию-предикат и возвращает итератор по элементам которые удовлетворяют предикату

```js
import { random, take, filter } from 'iterators/utils'';

const randomInt = random(0, 100);
console.log([...take(filter(randomInt, (el) => el > 30), 15)]);
```

## enumerate

`enumerate` - функция, которая принимает любой Iterable объект и возвращает итератор по парам (номер итерации, элемент)

```js
import { random, take, enumerate } from 'iterators/utils'';

const randomInt = random(0, 100);
console.log([...enumerate(take(randomInt, 3))]); // [[0, ...], [1, ...], [2, ...]]
```

## seq

`seq` - функция, которая принимает множество Iterable объектов и возвращает итератор по их элементам

```js
import { seq } from 'iterators/utils'';

console.log(...seq([1, 2], new Set([3, 4]), 'bla')); // 1, 2, 3, 4, 'b', 'l', 'a'
```

## zip

`zip` - функция, которая принимает множество Iterable объектов и возвращает итератор по кортежам их элементов

```js
import { zip } from 'iterators/utils'';

console.log(...zip([1, 2], new Set([3, 4]), 'bl')); // [[1, 3, b], [2, 4, 'l']]
```

## mapSeq

`mapSeq` - функция, которая принимает любой Iterable объект и Iterable с функциями и возвращает итератор, где каждому элементу левого Iterable псоледовательно применяются все функции из правого

```js
import { mapSeq } from 'iterators/utils'';

console.log(...mapSeq([1, 2, 3], [(el) => el * 2, (el) => el - 1])); // [1, 3, 5]
```