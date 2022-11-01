# generators/task-manager/priority

Этот модуль предоставляет класс `PriorityTaskManager`:

- принимает в конструктор объект с опциями, в котором `delay` - время задержки выполнения задачи, а `exec` - общее время выполнения всех задач в менеджере. По умолчанию `delay` и `exec` равны `100мс`;
- в каждом тике выполнения задач балансирует время выполнения всех задач в менеджере, за счет `recalculateExecTime` - функции перерасчета времени выполнения отдельной задачи. В соответствии с приоритетом задачи, время ее выполнения регулируется коэффициентом из хэш таблицы `ExecTimePriorities`;
- в каждом тике выполнения задач заполняется очередь `PriorityQueue`, где задачи с более высоким приоритетом распологаются в начале очереди, а с самым низким в самом конце. После того как очередь опустеет, если останутся незавершенные задачи, запустится следующая итерация и очередь снова заполнится.

## API

### forEach

Обходит любой Iterable объект любого размера, при этом не вызывая фризов в интерфейсе. Возвращает промис. В случае успешного завершения итераций вернет fulfilled промис, в противном случае, в случае возникновения ошибки в переданном колбэке, вернет rejected промис.

```js
import PriorityTaskManager from 'generators/task-manager/priority'

const taskManager = new PriorityTaskManager();

let total = 0;

taskManager
  .forEach(new Array(50e7), () => {
    total++
  }, { priority: 'high' })
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
