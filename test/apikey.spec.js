'use strict';

import chai from 'chai';
import sinon from 'sinon';
import apikey from '../src/apikey'; 

const expect = chai.expect;
const request = {get: _ => {}};

describe('#apikey', _ => {

  afterEach(() => {
    request.get.restore();
  });

  // cannot use _ => {}
  it('should return true when have api key', () => {
    sinon.stub(request, 'get').returns('lsdfjkl');
    expect(apikey.existsIn(request)).to.be.true;
  });

  it('should return false when not have api key', () => {
    sinon.stub(request, 'get').returns();

    expect(apikey.existsIn(request)).to.be.false;
  });

  it('should return false given a number', () => {
    sinon.stub(request, 'get').returns(123);

    expect(apikey.existsIn(request)).to.be.false;
  });

  it('should get value', () => {
    //here stub is the stubbed method 'get'
    let stub = sinon.stub(request, 'get').returns('lsjdf');
    expect(apikey.getKeyFrom(request)).to.equal('lsjdf');
  });

});


