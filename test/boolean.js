import {expect} from 'chai';
import asType from '../lib';

describe('boolean', function () {
  it('converts null to null', () => expect(asType.boolean(null)).to.equal(null));
  it('converts undefined to undefined', () => expect(asType.boolean(undefined)).to.equal(undefined));
  it('converts null to false', () => expect(asType.boolean(null, {allowNull: false})).to.equal(false));
  it('converts undefined to false', () => expect(asType.boolean(undefined, {allowUndefined: false})).to.equal(false));
  it('converts 0 to false', () => expect(asType.boolean(0)).to.equal(false));
  it('converts 1 to true', () => expect(asType.boolean(1)).to.equal(true));
  it('converts "0" to false', () => expect(asType.boolean('0')).to.equal(false));
  it('converts "1" to true', () => expect(asType.boolean('1')).to.equal(true));
  it('converts "0" to true', () => expect(asType.boolean('0', {convertNumbers: false})).to.equal(true));
  it('converts "1" to true', () => expect(asType.boolean('1', {convertNumbers: false})).to.equal(true));
  it('converts false to false', () => expect(asType.boolean(false)).to.equal(false));
  it('converts true to true', () => expect(asType.boolean(true)).to.equal(true));
  it('converts "false" to false', () => expect(asType.boolean('false')).to.equal(false));
  it('converts "true" to true', () => expect(asType.boolean('true')).to.equal(true));
  it('converts "false" to true', () => expect(asType.boolean('false', {parseString: false})).to.equal(true));
  it('converts "true" to true', () => expect(asType.boolean('true', {parseString: false})).to.equal(true));
});
