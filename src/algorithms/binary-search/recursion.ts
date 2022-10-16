export default function binarySearch(searchKey: number, sortedArr: number[]): number | null {
  if (!sortedArr.length) return null;

  function recFind(key: number, low: number, high: number): number | null {
    const middle = Math.round((low + high) / 2);
    const target = sortedArr[middle];

    if (target === searchKey) return middle;

    if (low === high) return null;

    if (target > searchKey) {
      return recFind(searchKey, low, middle - 1);
    }

    if (target < searchKey) {
      return recFind(searchKey, middle + 1, high);
    }

    return null;
  }

  return recFind(searchKey, 0, sortedArr.length - 1);
}
