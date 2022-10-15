# data-structures/queue/simple

Этот модуль предоставляет класс для создания простой очереди на основе связанного списка

## API

Апи реализует интерфейс `ISimpleQueue`

#### head

Выдает значение первого элемента в очереди

```js
import SimpleQueue from 'data-structures/queue/simple';

const queue = new SimpleQueue();
  
queue.push(10);

console.log(queue.head); // 10
```

#### length

Длина очереди

```js
import SimpleQueue from 'data-structures/queue/simple';

const queue = new SimpleQueue();
  
queue.push(10);
queue.push(20);

console.log(queue.length); // 2
```

#### push

Добавляет элемент в конец очереди и возвращает новую длину очереди

```js
import SimpleQueue from 'data-structures/queue/simple';

const queue = new SimpleQueue();
  
list.push(10);  // 1
list.push(20);  // 2

console.log(queue.head); // 10
```

#### shift

Удаляет первый элемент очереди и возвращает этот элемент

```js
import SimpleQueue from 'data-structures/queue/simple';

const queue = new SimpleQueue();
  
queue.push(10);
queue.push(20); 

queue.shift(); // 10
console.log(queue.head); // 20

queue.shift(); // 20
console.log(queue.head); // null

queue.shift(); // Exception 'Queue is empty'
```