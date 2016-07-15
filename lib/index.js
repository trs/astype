import stringFn from './string';
import numberFn from './number';
import booleanFn from './boolean';

class AsTypeWrapper {
  constructor() {
    this.options = {
      string: {},
      number: {},
      boolean: {}
    };

    this.string = stringFn;

    this.number = numberFn;
    this.integer = numberFn;
    this.float = numberFn;
    this.double = numberFn;

    this.boolean = booleanFn;
    this.bool = booleanFn;
  }

  setGlobal(options) {
    Object.keys(this.options).map((key) => {
      if (options.hasOwnProperty(key)) {
        Object.keys(options[key]).map((optionKey) => {
          this.options[key][optionKey] = options[key][optionKey];
        });
      }
    });
  }

  unsetGlobal(options) {
    function objectIsEmpty(obj) {
      return obj === null || obj === undefined ||
        (Object.keys(obj).length === 0 && obj.constructor === Object);
    }

    if (objectIsEmpty(options)) {
      Object.keys(this.options).map((key) => {
        this.options[key] = {};
      });
    } else {
      Object.keys(this.options).map((key) => {
        if (options.hasOwnProperty(key)) {
          if (objectIsEmpty(options[key])) this.options[key] = {};
          else {
            Object.keys(options[key]).map((optionKey) => {
              delete this.options[key][optionKey];
            });
          }
        }
      });
    }
  }
}

export default new AsTypeWrapper();
