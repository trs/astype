module.exports = function (options, input, {
  allowNull = options.number.hasOwnProperty('allowNull') ? options.number.allowNull : true,
  allowUndefined = options.number.hasOwnProperty('allowUndefined') ? options.number.allowUndefined : true,
  allowNaN = options.number.hasOwnProperty('allowNaN') ? options.number.allowNaN : true,
  allowInfinity = options.number.hasOwnProperty('allowInfinity') ? options.number.allowInfinity : true,
  allowFindInString = options.number.hasOwnProperty('allowFindInString') ? options.number.allowFindInString : true,
  allowDecimals = options.number.hasOwnProperty('allowDecimals') ? options.number.allowDecimals : true
} = {}) {
  if (input === null && allowNull) return input;
  if (input === undefined) {
    if (allowUndefined) return input;
    else return 0;
  }
  if (typeof input === 'string' && !input.length) {
    if (allowNull) return null;
    else return 0;
  }
  if (typeof input === 'number') {
    if (!Number.isFinite(Number(input))) {
      if (allowInfinity) return Infinity;
      else return 0;
    } else {
      if (!allowDecimals) return Math.floor(input);
      return input;
    }
  }
  if (Number.isNaN(Number(input))) {
    if (typeof input === 'string' && allowFindInString && /\d/igm.test(input)) {
      const number = Number(input.replace(/[^.\d]/igm, ''));
      if (!allowDecimals) return Math.floor(number);
      return number;
    }
    if (allowNaN) return NaN;
    else return 0;
  }
  const number = Number(input);
  if (!allowDecimals) return Math.floor(number);
  return number;
}
