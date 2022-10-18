// диапазон [min, max] кодированных в UTF-16 значений кодовых точек
const EncodingNumbers = {
  ASCII_DIGITS: [48, 57],
  FORMS: [8528, 8587],
  INDIC_FORMS: [43056, 43065],
};

export default function isDigit(string: string) {
  const trimedString = string.trim();

  const toCodePoint = (chars: string) => Number(chars.codePointAt(0));

  const isInRange = (codePoint: number, key: keyof typeof EncodingNumbers) => codePoint
  >= EncodingNumbers[key][0] && codePoint <= EncodingNumbers[key][1];

  const group = Object.keys(EncodingNumbers).find(
    (key) => isInRange(toCodePoint(trimedString), key),
  );

  if (!group) return false;

  return [...trimedString].every((char) => isInRange(toCodePoint(char), group));
}
