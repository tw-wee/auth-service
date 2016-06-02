'use strict';

import chai from 'chai';
import utils from '../src/utils';

const expect = chai.expect;

describe('#utils', _ => {
    it('should return false given non empty string', () => {
       expect(utils.isEmpty('sadf')).to.be.false;
       expect(utils.isEmpty('hello world')).to.be.false;
       expect(utils.isEmpty('  ')).to.be.false;
    });

    it('should return true given a number', () => {
        expect(utils.isEmpty(123)).to.be.true;
    });

    it('should return true given empty string', () => {
        expect(utils.isEmpty('')).to.be.true;
    });

    it('should return true given null', () => {
        expect(utils.isEmpty(null)).to.be.true;
    });
});
