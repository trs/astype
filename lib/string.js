module.exports = function (options, input, {
  allowNull = options.string.hasOwnProperty('allowNull') ? options.string.allowNull : true,
  allowUndefined = options.string.hasOwnProperty('allowUndefined') ? options.string.allowUndefined : true
} = {}) {
  if (input === null && allowNull) return input;
  if (input === undefined && allowUndefined) return input;
  if (allowNull && typeof input === 'string' && !input.length) return null;
  if (typeof input === 'object' && !Array.isArray(input)) {
    return JSON.stringify(input);
  }
  return String(input);
}
