import as from './index';

export default function (input, {
  allowNull = as.options.number.hasOwnProperty('allowNull') ? as.options.number.allowNull : true,
  allowUndefined = as.options.number.hasOwnProperty('allowUndefined') ? as.options.number.allowUndefined : true,
  allowNaN = as.options.number.hasOwnProperty('allowNaN') ? as.options.number.allowNaN : true,
  allowInfinity = as.options.number.hasOwnProperty('allowInfinity') ? as.options.number.allowInfinity : true,
  allowFindInString = as.options.number.hasOwnProperty('allowFindInString') ? as.options.number.allowFindInString : true
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
