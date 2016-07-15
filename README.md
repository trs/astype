# astype [![NPM version][npm-image]][npm-url]
> Convert an unknown type to a number (integer, float), string, or boolean

* [Installation](#installation)
* [Usage](#usage)
* [Options](#options)

## Installation

```sh
$ npm install --save astype
```

## Usage

```js
import as from 'astype';

as.number('1'); // 1
as.boolean(0); // false
as.string(true); // "true"
```

### Available conversions

* `number(...)` (aliases: `double()`, `float()`, `integer()`)
* `boolean(...)` (aliases: `bool()`)
* `string(...)`

## Options

### Global

This will set the behavior anytime a conversion is used.

```js
as.setGlobal({
  number: { ... },
  boolean: { ... },
  string: { ... }
});
```

### Per Query

You can also pass through options in the conversion, these will override
any global options.

```js
as.number(..., { ... })
```

### Available Options

#### `number`
* **allowNull** (default: `true`)
  * If `true`: conversion can return the value `null`
  * If `false`: conversion will return `0` if `null`


* **allowUndefined** (default: `true`)
  * If `true`: conversion can return the value `undefined`
  * If `false`: conversion will return `0` if `undefined`


* **allowNaN** (default: `true`)
  * If `true`: conversion can return the value `NaN`
  * If `false`: conversion will return `0` if `NaN`


* **allowInfinity** (default: `true`)
  * If `true`: conversion can return the value `Infinity`
  * If `false`: conversion will return `0` if `Infinity`


* **allowFindInString** (default: `true`)
  * If `true`: conversion can will pick out numbers from a string  
  (eg: 'abc123!' => 123)
  * If `false`: conversion will return `NaN` if **allowNaN** is `true`,
  otherwise `0`

#### `boolean`
* **allowNull** (default: `true`)
  * If `true`: conversion can return the value `null`
  * If `false`: conversion will return `0` if `null`


* **allowUndefined** (default: `true`)
  * If `true`: conversion can return the value `undefined`
  * If `false`: conversion will return `0` if `undefined`


* **parseString** (default: `true`)
  * If `true`: will parse the strings `"true"` and `"false"` to `true`
  and `false` respectively
  * If `false`: will parse the string to a boolean (`Boolean("string")`)


* **convertNumbers** (default: `true`)
  * If `true`: if the input is a number (or string that is a number),
  it will parse as a number first, then convert to a boolean  
  (eg: '1' => 1 => true)
  * If `false`: will parse the string to a boolean (`Boolean(1)`)

#### `string`
* **allowNull** (default: `true`)
  * If `true`: conversion can return the value `null`
  * If `false`: conversion will return `0` if `null`


* **allowUndefined** (default: `true`)
  * If `true`: conversion can return the value `undefined`
  * If `false`: conversion will return `0` if `undefined`

## License

MIT © [Tyler Stewart]()

[npm-image]: https://badge.fury.io/js/astype.svg
[npm-url]: https://npmjs.org/package/astype
