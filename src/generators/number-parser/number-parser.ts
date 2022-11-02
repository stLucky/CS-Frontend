import State from './state';

export default function numberParser(input = '') {
  let expr = '';

  function* createGen() {
    let state = State.INITIAL;

    while (true) {
      for (const symbol of input) {
        switch (symbol) {
          case '-':
            if (state !== State.INITIAL && state !== State.EXP) {
              throwError();
            }

            if (state === State.INITIAL) {
              state = State.INIT_MINUS;
            }

            if (state === State.EXP_MINUS) {
              state = State.EXP_MINUS;
            }
            break;

          case 'e':
            if (state !== State.INT_CHUNK && state !== State.FRACT_CHUNK) {
              throwError();
            }

            state = State.EXP;
            break;

          case '.':
            if (
              state !== State.INITIAL
              && state !== State.INT_CHUNK
              && state !== State.INIT_MINUS
            ) {
              throwError();
            }

            state = State.DOT;
            break;

          default:
            if (!/\d/.test(symbol)) {
              throwError();
            }

            if (state === State.DOT) {
              state = State.FRACT_CHUNK;
            }

            if (state === State.EXP) {
              state = State.EXP_NUMBER;
            }

            state = State.INT_CHUNK;
            break;
        }

        expr += symbol;
      }

      input = yield expr;
    }
  }

  const gen = createGen();
  gen.next();

  Object.defineProperty(gen, 'return', {
    value() {
      return { value: parseFloat(expr), done: true };
    },
  });

  return gen;
}

function throwError() {
  throw new SyntaxError('Invalid data');
}
