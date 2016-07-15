import {expect} from 'chai';
import as from '../lib';

describe('string', function () {
  it('converts null to null', () => expect(as.string(null)).to.equal(null));
  it('converts undefined to undefined', () => expect(as.string(undefined)).to.equal(undefined));
  it('converts null to "null"', () => expect(as.string(null, {allowNull: false})).to.equal('null'));
  it('converts undefined to "undefined"', () => expect(as.string(undefined, {allowUndefined: false})).to.equal('undefined'));
  it('converts "null" to "null"', () => expect(as.string('null')).to.equal('null'));
  it('converts "undefined" to "undefined"', () => expect(as.string('undefined')).to.equal('undefined'));
  it('converts "" to null', () => expect(as.string('')).to.equal(null));
  it('converts "" to ""', () => expect(as.string('', {allowNull: false})).to.equal(''));
  it('converts 1 to "1"', () => expect(as.string(1)).to.equal('1'));
  it('converts 1.1 to "1.1"', () => expect(as.string(1.1)).to.equal('1.1'));
  it('converts false to "false"', () => expect(as.string(false)).to.equal('false'));
  it('converts true to "true"', () => expect(as.string(true)).to.equal('true'));
  it('converts [1, false, "5"] to "1,false,5"', () => expect(as.string([1, false, '5'])).to.equal('1,false,5'));
  it('converts {x:1, y:false, z:"hi"} to "{"x":1,"y":false,"z":"hi"}"', () => expect(as.string({x: 1, y: false, z: 'hi'})).to.equal('{"x":1,"y":false,"z":"hi"}'));
});
