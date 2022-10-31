# generators/worker
.
Этот модуль предоставляет класс `Worker`, который:

  - позволяет выполнять переданные задачи в виде колбэк-функции на `iterable` объекте;
  - при этом не блокируяет основной поток, за счет разбиения всех задач на подзадачи;
  - каждая подзадача отправляется в очередь макротасок с задержкой `delay` и выполняется за время, не превышающая время `exec`;
  - принимает в конструктор опции (время `delay` и `exec`). По умолчанию `delay` и `exec` равны `100мс`.

## API

### run

Запускает выполнение переданных в конструктор задач. Принимает на вход 2 колбэка от промиса:
  - `resolve` - вызывается в случае успешного завершения всех задач;
  - `reject` - вызывается в случае возникновения ошибки в какой-то из задач.

```js
import Worker from 'generators/worker';

const worker = new Worker(iterable, cb);

worker.run(resolve, reject)
```

### recalculateExecTime

Пересчитывает максимальное время выполнения одной задачи `exec`

```js
import Worker from 'generators/worker';

const worker = new Worker(iterable, cb);

worker.recalculateExecTime(200)
```
