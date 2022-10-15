# data-structures/dynamic-array/linked-list

Этот модуль предоставляет класс для создания динамического расширяемого массива на основе связанного списка

```js
const arr = new ListDynamicArray(3 /* Размер фиксированного массива в списке */);

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);

console.log(arr.length);  // 5

console.log(arr.get(0));  // 1
console.log(arr.get(1));  // 2
console.log(arr.get(4));  // 5

for (const value of arr) {
  console.log(value); // 1 2 3 4 5
}

```
