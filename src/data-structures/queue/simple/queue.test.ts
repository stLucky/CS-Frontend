import SimpleQueue from './queue';

describe('SimpleQueue', () => {
  test('should init correctly', () => {
    const queue = new SimpleQueue<number>();

    expect(queue.head).toBe(undefined);
    expect(queue.length).toBe(0);
  });

  test('should push correctly', () => {
    const queue = new SimpleQueue<number>();
    queue.push(1);

    expect(queue.head).toBe(1);
    expect(queue.length).toBe(1);
  });

  test('should shift correctly', () => {
    const queue = new SimpleQueue<number>();
    queue.push(1);
    queue.push(2);
    queue.push(3);

    queue.shift();

    expect(queue.head).toBe(2);
    expect(queue.length).toBe(2);
  });
});
