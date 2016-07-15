import {expect} from 'chai';
import asType from '../lib';

describe('number', function () {
  it('converts null to null', () => expect(asType.number(null)).to.equal(null));
  it('converts undefined to undefined', () => expect(asType.number(undefined)).to.equal(undefined));
  it('converts null to 0', () => expect(asType.number(null, {allowNull: false})).to.equal(0));
  it('converts undefined to 0', () => expect(asType.number(undefined, {allowUndefined: false})).to.equal(0));
  it('converts "undefined" to NaN', () => expect(asType.number('undefined')).to.be.NaN);
  it('converts "undefined" to 0', () => expect(asType.number('undefined', {allowNaN: false})).to.equal(0));
  it('converts "123a" to NaN', () => expect(asType.number('123a', {allowFindInString: false})).to.be.NaN);
  it('converts "123a" to 0', () => expect(asType.number('123a', {allowFindInString: false, allowNaN: false})).to.equal(0));
  it('converts "123a" to 123', () => expect(asType.number('123a')).to.equal(123));
  it('converts Infinity to 0', () => expect(asType.number(Infinity, {allowInfinity: false})).to.equal(0));
  it('converts Infinity to Infinity', () => expect(asType.number(Infinity)).to.equal(Infinity));
});
