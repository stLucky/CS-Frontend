# data-structures/queue/double

Этот модуль предоставляет класс для создания двусторонней очереди

## API

Апи наследует интерфейс `ISimpleQueue` и реализует свой интерфейс `IDoubleQueue`

#### tail

Выдает значение последнего элемента в очереди

```js
import DoubleQueue from 'data-structures/queue/double';

const queue = new DoubleQueue();
  
queue.push(10);
queue.push(20);

console.log(queue.tail); // 20
```

### unshift

Добавляет элемент в начало очереди и возвращает новую длину очереди

```js
import DoubleQueue from 'data-structures/queue/double';

const queue = new DoubleQueue();
  
queue.push(10);
queue.push(20); 

queue.unshift(5); // 3

console.log(queue.head); // 5
```

### pop

Удаляет последний элемент очереди и возвращает этот элемент

```js
import DoubleQueue from 'data-structures/queue/double';

const queue = new DoubleQueue();
  
queue.push(10);
queue.push(20); 

queue.pop(); // 20
console.log(queue.tail); // 10

queue.pop(); // 10
console.log(queue.tail); // null

queue.pop(); // Exception 'Queue is empty'
```
