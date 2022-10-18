# strings/utils

Этот модуль предоставляет утилитарные функции для работы со строками.

## isDigit

`isDigit` - функция, определяющая явлется ли переданная строка числом или нет. 
Умеет работать с 3-мя группами Unicode цифр:
  - `ASCII digits`;
  - `Number Forms`;
  - `Common Indic Number Forms`


```js
import { isDigit } from 'strings/utils';

isDigit('123') // true
isDigit('Ⅻ')  // true
isDigit('꠵')  // true
```