# generators/number-parser

Этот модуль предоставляет функцию `numberParser` - потоковый парсер чисел на основе генератора.

```js
import numberParser from 'generators/number-parser';

const parser = numberParser();

parser.next('-');   // {value: '-', done: false}
parser.next('14');  // {value: '-14', done: false}
parser.next('.');   // {value: '-14.', done: false}
parser.next('53');  // {value: '-14.53', done: false}
parser.next('e-');  // {value: '-14.53e-', done: false}
parser.next('4'); // {value: '-14.53e-4', done: false}
parser.return();    // {value: -14.53e-4, done: true}

```
