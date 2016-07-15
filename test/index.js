import {expect} from 'chai';
import as from '../lib';

describe('global options', function () {
  before(() => {
    as.setGlobal({
      number: {
        allowNull: false,
        allowFindInString: false
      },
      boolean: {
        parseString: false
      },
      string: {
        allowUndefined: false
      }
    });
  });

  after(() => {
    as.unsetGlobal();
  });

  it('converts null to 0', () => expect(as.number(null)).to.equal(0));
  it('converts "abc123" to NaN', () => expect(as.number('abc123')).to.be.NaN);
  it('converts "abc123" to 0', () => expect(as.number('abc123', {allowNaN: false})).to.equal(0));
});
