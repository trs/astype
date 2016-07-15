import as from './index';

export default function (input, {
  allowNull = as.options.string.hasOwnProperty('allowNull') ? as.options.string.allowNull : true,
  allowUndefined = as.options.string.hasOwnProperty('allowUndefined') ? as.options.string.allowUndefined : true
} = {}) {
  if (input === null && allowNull) return input;
  if (input === undefined && allowUndefined) return input;
  if (typeof input === 'object' && !Array.isArray(input)) {
    return JSON.stringify(input);
  }
  return String(input);
}
