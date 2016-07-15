import {expect} from 'chai';
import asType from '../lib';

describe('string', function () {
  it('converts null to null', () => expect(asType.string(null)).to.equal(null));
  it('converts undefined to undefined', () => expect(asType.string(undefined)).to.equal(undefined));
  it('converts null to "null"', () => expect(asType.string(null, {allowNull: false})).to.equal('null'));
  it('converts undefined to "undefined"', () => expect(asType.string(undefined, {allowUndefined: false})).to.equal('undefined'));
  it('converts "null" to "null"', () => expect(asType.string('null')).to.equal('null'));
  it('converts "undefined" to "undefined"', () => expect(asType.string('undefined')).to.equal('undefined'));
  it('converts 1 to "1"', () => expect(asType.string(1)).to.equal('1'));
  it('converts 1.1 to "1.1"', () => expect(asType.string(1.1)).to.equal('1.1'));
  it('converts false to "false"', () => expect(asType.string(false)).to.equal('false'));
  it('converts true to "true"', () => expect(asType.string(true)).to.equal('true'));
  it('converts [1, false, "5"] to "1,false,5"', () => expect(asType.string([1, false, '5'])).to.equal('1,false,5'));
  it('converts {x:1, y:false, z:"hi"} to "{"x":1,"y":false,"z":"hi"}"', () => expect(asType.string({x: 1, y: false, z: 'hi'})).to.equal('{"x":1,"y":false,"z":"hi"}'));
});
