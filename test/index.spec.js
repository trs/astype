const expect = require('chai').expect;
const as = require('../lib');

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

  it('should unset one global option', () => {
    as.unsetGlobal({
      number: ['allowNull'],
      boolean: { parseString: null }
    });
    expect(as.getGlobalOptions().number).to.not.have.property('allowNull');
    expect(as.getGlobalOptions().boolean).to.not.have.property('parseString');
  });
  it('should unset one global option', () => {
    as.unsetGlobal({
      string: {}
    });
    expect(as.getGlobalOptions().string).to.eql({});
  });
});
