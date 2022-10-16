export default function binarySearch(searchKey: number, sortedArr: number[]) {
  if (!sortedArr.length) return null;

  let low = 0;
  let high = sortedArr.length - 1;

  while (low <= high) {
    const middle = Math.round((low + high) / 2);
    const target = sortedArr[middle];

    if (target === searchKey) return middle;
    if (target > searchKey) high = middle - 1;
    if (target < searchKey) low = middle + 1;
  }

  return null;
}
