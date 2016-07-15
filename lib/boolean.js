import as from './index';

export default function (input, {
  allowNull = as.options.boolean.hasOwnProperty('allowNull') ? as.options.boolean.allowNull : true,
  allowUndefined = as.options.boolean.hasOwnProperty('allowUndefined') ? as.options.boolean.allowUndefined : true,
  parseString = as.options.boolean.hasOwnProperty('parseString') ? as.options.boolean.parseString : true,
  convertNumbers = as.options.boolean.hasOwnProperty('convertNumbers') ? as.options.boolean.convertNumbers : true
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
