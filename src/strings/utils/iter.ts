const Surrogates = {
  // Диапазон суррогатных пар [min, max]
  JUNIOR: [0xd800, 0xdbff],
  ELDES: [0xdc00, 0xdfff],
};

const isSurrogate = (code: number): boolean => (code >= Surrogates.JUNIOR[0]
  && code <= Surrogates.JUNIOR[1]) || (code >= Surrogates.ELDES[0] && code <= Surrogates.ELDES[1]);

export default function iter(string: string): IterableGenerator<string> {
  return {
    * [Symbol.iterator]() {
      let char = '';

      for (let i = 0; i < string.length; i += 1) {
        const code = string[i].charCodeAt(0);

        if (isSurrogate(code)) {
          if (char.length === 2) {
            char = '';
          }

          char += string[i];
        } else {
          if (char !== '') {
            char = '';
          }

          yield string[i];
        }

        if (char.length === 2) {
          yield char;
        }
      }
    },
  };
}

interface IterableGenerator<T> {
  [Symbol.iterator](): Generator<T>
}
