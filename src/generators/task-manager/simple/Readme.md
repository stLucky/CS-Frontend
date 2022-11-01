# generators/task-manager/simple

Этот модуль предоставляет класс `SimpleTaskManager`, который:
  - принимает в конструктор объект с опциями, в котором `delay` - время задержки выполнения задачи, а `exec` - общее время выполнения всех задач в менеджере. По умолчанию `delay` и `exec` равны `100мс`;
  - балансирует время выполнения всех задач в менеджере, за счет `recalculateExecTime` - функции перерасчета времени выполнения отдельной задачи в каждом `Worker`. Таким образом время выполнения задачи в `Worker` будет саморегулироваться и оставаться оптимальным в зависимости от количества всех задач в менеджере.

## API

### forEach

Обходит любой Iterable объект любого размера, при этом не вызывая фризов в интерфейсе. Возвращает промис. В случае успешного завершения итераций вернет fulfilled промис, в противном случае, в случае возникновения ошибки в переданном колбэке, вернет rejected промис.

```js
import SimpleTaskManager from 'generators/task-manager/simple'

const taskManager = new SimpleTaskManager();

let total = 0;

taskManager
  .forEach(new Array(50e7), () => {
    total++
  })
  .then(() => {
    console.log(total); // 50e7
  });

taskManager
  .forEach(new Array(50e7), () => {
    throw new Error('oops')
  })
  .then(() => {
    console.log('fulfilled'); // 50e7
  });
  .catch((err) => {
    console.log(err.message) // 'oops'
  })
```

