import iter from './iter';

describe('iter', () => {
  test('should give one character for surrogate pairs', () => {
    expect([...iter('😀')]).toEqual(['😀']);
    expect([...iter('😀45f')]).toEqual(['😀', '4', '5', 'f']);
  });
});
