# asynchrony/timeout

Этот модуль предоставляет функцию:
  - `timeout` - принимает `promise` и количество `мс`. Если переданный `promise` будет выполняться дольше, чем переданное количество `мс`, то вернет `rejected promise` с ошибкой `timeout`, иначе вернет `fulfilled promise`.