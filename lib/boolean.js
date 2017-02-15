module.exports = function (options, input, {
  allowNull = options.boolean.hasOwnProperty('allowNull') ? options.boolean.allowNull : true,
  allowUndefined = options.boolean.hasOwnProperty('allowUndefined') ? options.boolean.allowUndefined : true,
  parseString = options.boolean.hasOwnProperty('parseString') ? options.boolean.parseString : true,
  convertNumbers = options.boolean.hasOwnProperty('convertNumbers') ? options.boolean.convertNumbers : true
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
