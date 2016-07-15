export default function (input, {
  allowNull = true,
  allowUndefined = true,
  allowNaN = true,
  allowInfinity = true,
  allowFindInString = true
} = {}) {
  if (input === null && allowNull) return input;
  if (input === undefined) {
    if (allowUndefined) return input;
    else return 0;
  }
  if (typeof input === 'number') {
    if (!Number.isFinite(Number(input))) {
      if (allowInfinity) return Infinity;
      else return 0;
    } else return input;
  }
  if (Number.isNaN(Number(input))) {
    if (typeof input === 'string' && allowFindInString && /\d/igm.test(input)) {
      return Number(input.replace(/\D/igm, ''));
    }
    if (allowNaN) return NaN;
    else return 0;
  }
  return Number(input);
}
