export default function (input, {
  allowNull = true,
  allowUndefined = true
} = {}) {
  if (input === null && allowNull) return input;
  if (input === undefined && allowUndefined) return input;
  if (typeof input === 'object' && !Array.isArray(input)) {
    return JSON.stringify(input);
  }
  return String(input);
}
