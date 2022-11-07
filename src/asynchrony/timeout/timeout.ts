export default function timeout<T>(promise: Promise<T>, ms: number) {
  return new Promise((resolve, reject) => {
    promise.then(resolve).catch(reject);

    setTimeout(() => {
      reject(new Error('timeout'));
    }, ms);
  });
}
