export default function (input, {
  allowNull = true,
  allowUndefined = true,
  parseString = true,
  convertNumbers = true
} = {}) {
  if (input === null && allowNull) return input;
  if (input === undefined && allowUndefined) return input;

  if (parseString) {
    if (input === 'true') return true;
    else if (input === 'false') return false;
  }
  if (convertNumbers && !Number.isNaN(Number(input))) {
    input = Number(input);
  }

  return Boolean(input);
}
