import {expect} from 'chai';
import as from '../lib';

describe('boolean', function () {
  it('converts null to null', () => expect(as.boolean(null)).to.equal(null));
  it('converts undefined to undefined', () => expect(as.boolean(undefined)).to.equal(undefined));
  it('converts null to false', () => expect(as.boolean(null, {allowNull: false})).to.equal(false));
  it('converts undefined to false', () => expect(as.boolean(undefined, {allowUndefined: false})).to.equal(false));
  it('converts 0 to false', () => expect(as.boolean(0)).to.equal(false));
  it('converts 1 to true', () => expect(as.boolean(1)).to.equal(true));
  it('converts "0" to false', () => expect(as.boolean('0')).to.equal(false));
  it('converts "1" to true', () => expect(as.boolean('1')).to.equal(true));
  it('converts "0" to true', () => expect(as.boolean('0', {convertNumbers: false})).to.equal(true));
  it('converts "1" to true', () => expect(as.boolean('1', {convertNumbers: false})).to.equal(true));
  it('converts false to false', () => expect(as.boolean(false)).to.equal(false));
  it('converts true to true', () => expect(as.boolean(true)).to.equal(true));
  it('converts "false" to false', () => expect(as.boolean('false')).to.equal(false));
  it('converts "true" to true', () => expect(as.boolean('true')).to.equal(true));
  it('converts "false" to true', () => expect(as.boolean('false', {parseString: false})).to.equal(true));
  it('converts "true" to true', () => expect(as.boolean('true', {parseString: false})).to.equal(true));
});
