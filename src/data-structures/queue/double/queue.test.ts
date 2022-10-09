import DoubleQueue from './queue';

describe('DoubleQueue', () => {
  test('should init correctly', () => {
    const queue = new DoubleQueue<number>();

    expect(queue.head).toBe(undefined);
    expect(queue.tail).toBe(undefined);
    expect(queue.length).toBe(0);
  });

  test('should unshift correctly', () => {
    const queue = new DoubleQueue<number>();
    queue.unshift(1);
    queue.unshift(2);

    expect(queue.head).toBe(2);
    expect(queue.tail).toBe(1);
    expect(queue.length).toBe(2);
  });

  test('should pop correctly', () => {
    const queue = new DoubleQueue<number>();
    queue.unshift(1);
    queue.unshift(2);
    queue.unshift(3);

    queue.pop();

    expect(queue.head).toBe(3);
    expect(queue.tail).toBe(2);
    expect(queue.length).toBe(2);
  });
});
