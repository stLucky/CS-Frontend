import Structure from './structure';

describe('Structure', () => {
  test('should correctly get value from key', () => {
    const structure = new Structure(['name', 'lastName', 'age']);
    structure.set('name', 'Jack');
    structure.set('age', 53);

    expect(structure.get('name')).toBe('Jack');

    expect(structure.get('age')).toBe(53);
  });

  test('should throw ReferenceError when key not found', () => {
    const structure = new Structure(['name']);

    expect(() => {
      structure.get('unknown');
    }).toThrow(ReferenceError);
  });
});
