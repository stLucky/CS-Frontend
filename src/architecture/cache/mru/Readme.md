# architecture/cache/mru

Этот модуль предоставляет класс `MRUCache` для создания кэша:
  - в качестве алгоритма вытеснения из кэша используется `MRU`;
  - наследует поведение класса `LRUCache`.

## API

Аналогично апи [`LRUCache`](../lru#readme);