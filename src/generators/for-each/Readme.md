# generators/for-each
.
Этот модуль предоставляет функцию `forEach`, которая:

  - позволяет обходить любой Iterable объект любого размера, при этом не вызывая фризов в интерфейсе;
  - возвращает промис. В случае успешного завершения итераций вернет fulfilled промис, в противном случае, в случае возникновения ошибки в переданном колбэке, вернет rejected промис.


```js
import forEach from 'generators/for-each';

let total = 0;

forEach(new Array(50e7), () => {
  total++;
}).then(() => console.log(total)) // 50e7

forEach(new Array(50e7), () => {
  throw new Error('oops')
}).then(() => console.log('fulfilled'))
  .catch((err) => console.log(err.message)) // 'oops'

```
