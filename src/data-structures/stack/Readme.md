# data-structures/stack

Этот модуль предоставляет класс для создания стека на основе массива фиксированной длины

```js
import Stack from 'data-structures/stack'

const stack = new Stack(3)

stack.push(10)
stack.push(11)
stack.push(12)

console.log(stack.head) // 12

console.log(stack.pop()) // 12

console.log(stack.head) // 11

console.log(stack.pop()) // 11
console.log(stack.pop()) // 10
console.log(stack.pop()) // Exception
```

## API

### head

Выдает значение с вершины стека

```js
import Stack from 'data-structures/stack'

const stack = new Stack(2)

console.log(stack.head) // undefined

stack.push(10)
console.log(stack.head) // 10

stack.push(20)
console.log(stack.head) // 20
```

### push

Вставляет в стек новый элемент данных

```js
import Stack from 'data-structures/stack'

const stack = new Stack(3)

stack.push(10) // undefined
stack.push(20) // undefined
stack.push(50) // undefined

stack.push(50) // Exception Stack overflow

console.log(stack.head) // 50
```

### pop

Извлекает элемент данных с вершины стека и возвращает его

```js
import Stack from 'data-structures/stack'

const stack = new Stack(3)

stack.push(10)
stack.push(20)
stack.push(50)

console.log(stack.pop()) // 50
console.log(stack.pop()) // 20
console.log(stack.pop()) // 10

stack.pop() // Exception Stack empty
```
