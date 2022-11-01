# container-types/result

Этот модуль предоставляет класс `Result`:
  - создает контейнер означающий, что может быть ошибка;
  - обладает характеристиками монады и фуктора;
  - имеет два состояния - `error` и `ok`.


## API

### map
Реализует интерфейс функтора.
Выполняет переданный колбэк на контейнере. Возвращает новый контейнер.

```js
import Result from 'container-types/result'

const result = new Result(() => 10);

result
  .map((val) => val * 2)
  .map(console.log) // 20
```

### flatMap
Реализует интерфейс монады.
Выполняет переданный колбэк на контейнере. Возвращает новый контейнер.

```js
import Result from 'container-types/result'

const result = new Result(() => 10);

result
  .flatMap((val) => new Result(() => val * 10))
  .map(consol.log) // 100
```

### catch

Выполняет переданный колбэк на контейнере при возникновении ошибки. Возвращает новый контейнер.

```js
import Result from 'container-types/result'

const result = new Result(() => {
  throw new Error('oops')
});

result
  .map((val) => console.log('ok'))
  .catch(console.log) // 'oops'
```
