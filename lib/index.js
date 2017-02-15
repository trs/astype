const stringFn = require('./string');
const numberFn = require('./number');
const booleanFn = require('./boolean');

const globalOptions = {
  string: {},
  number: {},
  boolean: {}
};

const as = {
  string: stringFn.bind(this, globalOptions),
  number: numberFn.bind(this, globalOptions),
  integer: numberFn.bind(this, globalOptions),
  float: numberFn.bind(this, globalOptions),
  double: numberFn.bind(this, globalOptions),
  boolean: booleanFn.bind(this, globalOptions),
  bool: booleanFn.bind(this, globalOptions),

  getGlobalOptions: function () {
    return globalOptions;
  },

  setGlobal: function (options) {
    return this.setGlobalOptions(options);
  },
  setGlobalOptions: function (options) {
    Object.keys(globalOptions).map((key) => {
      if (options.hasOwnProperty(key)) {
        Object.keys(options[key]).map((optionKey) => {
          globalOptions[key][optionKey] = options[key][optionKey];
        });
      }
    });
  },

  unsetGlobal: function (options) {
    return this.unsetGlobalOptions(options);
  },
  unsetGlobalOptions: function (options) {
    function objectIsEmpty(obj) {
      return obj === null || obj === undefined ||
        (Object.keys(obj).length === 0 && obj.constructor === Object);
    }

    if (objectIsEmpty(options)) {
      Object.keys(globalOptions).map((key) => {
        globalOptions[key] = {};
      });
    } else {
      Object.keys(globalOptions).map((key) => {
        if (options.hasOwnProperty(key)) {
          if (objectIsEmpty(options[key])) globalOptions[key] = {};
          else {
            const values = options[key];
            const optionKeys = Array.isArray(values) ? values : Object.keys(options[key]);
            optionKeys.map((optionKey) => {
              delete globalOptions[key][optionKey];
            });
          }
        }
      });
    }
  }
};

module.exports = as;
