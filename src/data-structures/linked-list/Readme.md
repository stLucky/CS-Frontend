# data-structures/linked-list

Этот модуль предоставляет класс для создания двустороннего двусвязанного связанного список

```js
import LinkedList from 'data-structures/linked-list';

const list = new LinkedList();

list.push(10);
list.push(20);
list.push(30);

console.log(list.first); // 10
console.log(list.last); // 30
console.log(list.length); // 3
```

## API

### first

Выдает значение первого элемента в списке

```js
import LinkedList from 'core/linked-list';

const list = new LinkedList();
  
list.push(10);

console.log(list.first); // 10
```

### last

Выдает значение последнего элемента в списке

```js
import LinkedList from 'core/linked-list';

const list = new LinkedList();
  
list.push(10);
list.push(20);

console.log(list.last); // 20
```

### length

Длина списка

```js
import LinkedList from 'core/linked-list';

const list = new LinkedList();
  
list.push(10);
list.push(20);

console.log(list.length); // 2
```

### push

Добавляет элемент в конец списка и возвращает новую дину списка

```js
import LinkedList from 'core/linked-list';

const list = new LinkedList();
  
list.push(10);  // 1
list.push(20);  // 2

console.log(Array.from(list)); // [10, 20]
```

### pop

Удаляет последний элемент списка и возвращает этот элемент

```js
import LinkedList from 'core/linked-list';

const list = new LinkedList();
  
list.push(10);
list.push(20); 

list.pop(); // 20

console.log(Array.from(list)); // [10]
```

### shift

Удаляет первый элемент списка и возвращает этот элемент

```js
import LinkedList from 'core/linked-list';

const list = new LinkedList();
  
list.push(10);
list.push(20); 

list.shift(); // 10

console.log(Array.from(list)); // [20]
```

### unshift

Добавляет элемент в начало списка и возвращает новую длину списка

```js
import LinkedList from 'core/linked-list';

const list = new LinkedList();
  
list.push(10);
list.push(20); 

list.unshift(5); // 3

console.log(Array.from(list)); // [5, 10, 20]
```
