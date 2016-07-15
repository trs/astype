import cstring from './string';
import cnumber from './number';
import cboolean from './boolean';

class AsTypeWrapper {
  constructor() {
    this.options = {
      string: {},
      number: {},
      boolean: {}
    };

    this.string = cstring;

    this.number = cnumber;
    this.integer = cnumber;
    this.float = cnumber;
    this.double = cnumber;

    this.boolean = cboolean;
    this.bool = cboolean;
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

  removeGlobal(options) {
    Object.keys(this.options).map((key) => {
      if (options.hasOwnProperty(key)) {
        if (Object.isEmpty(options[key])) this.options[key] = {};
        else {
          Object.keys(options[key]).map((optionKey) => {
            delete this.options[key][optionKey];
          });
        }
      }
    });
  }
}

export default new AsTypeWrapper();
