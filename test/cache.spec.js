//'use strict';
//
//import chai from 'chai';
//import cache from '../src/cache';
//
//const expect = chai.expect;
//
//describe('#cache', _ => {
//  describe('-> set', _ => {
//    it('should cache a value and return a key', done => {
//      cache.set({name: 'koly', role:'admin'})
//        .then(key => {
//          expect(key).to.be.a('string');
//          done();
//        });
//    });
//  });
//
//  describe('-> get', _ => {
//    it('should get a value from cache', done => {
//      cache.set({name: 'koly', role:'admin'})
//        .then(key => {
//          console.log('key is', key);
//          cache.get(key)
//            .then(obj => {
//              expect(obj).to.deep.equal({name: 'koly', role:'admin'});
//              done();
//            });
//        });
//    });
//  });
//});
