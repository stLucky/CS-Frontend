# strings/regex

Этот модуль предоставляет функции, внутри которых используются регулярные выражения

## isValidName

`isValidName` - проверяет есть ли в строке символы отличные от латинских, цифр, подчеркивания и знака $, причем строка не должна начинаться с цифр.

```js
import { isValidName } from 'strings/regex'

isValidName('привет') // false
isValidName('hello') // true
isValidName('123hello') // false
isValidName() // Exception
```

## split

`split` - создает массив на основе строки по разделителю. В качестве разделителя используется регулярное выражение в строковом виде. По умолчанию разделителем являются символы `.,;` или пробелы (подряд идущие пробелы считаюся за один)

```js
import { split } from 'strings/regex'

split('foo    bla.bar,gd;4') // ['foo', 'bla', 'bar', 'gd', '4']
split('hello|world@foo', '[|@]') // ['hello', 'world', foo]
split() // Exception
```

## format

`format` - принимает строковый шаблон и объект параметров, и возвращает результат применения данных к этому шаблону

```js
import { format } from 'strings/regex'

format('Hello, ${user}! Your age is ${age}.', { user: 'Bob', age: 10 }) // Hello, Bob! Your age is 10.
format('Hello, ${user}! Your age is ${age}.', { age: 10 }) // Hello, ${user}! Your age is 10.
format() // Exception
```

## removeDuplicates

`removeDuplicates` - удаляляет из строки любые дублирования подстрок из 1-го, 2-х или 3-х символов, которые идут подряд

```js
import { removeDuplicates } from 'strings/regex'

removeDuplicates('aaaabbbbczzzz') // 'abcz'
removeDuplicates('abababbbabcabc') // 'abbabc'
removeDuplicates('foofoobabaaaazze') // 'foobaaze'
removeDuplicates() // Exception
```

## calc

`calc` - находит арифметические операции в строке и заменяет на результат

```js
import { calc } from 'strings/regex'

calc(`
Какой-то текст (10 + 15 - 24) ** 2
Еще какой-то текст 2 * 10
`) // Какой-то текст 1
// Еще какой-то текст 20
calc() // Exception
```
