# data-structures/queue

Этот модуль предоставляет 2 класса:
  - SimpleQueue - простая очередь на основе связанного списка;
  - DoubleQueue - двусторонняя очередь.


## API

### SimpleQueue

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
```

### DoubleQueue extends SimpleQueue

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
```

