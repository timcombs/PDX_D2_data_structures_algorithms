var expect = require('chai').expect;
var MyArray = require('./array-methods.js');

describe('Implement Methods', function() {
var implementMyArray = new MyArray();

  describe('my pop method', function(){
    it('should return the item popped off the array', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      expect(implementMyArray.myPop(someArray)).to.deep.equal('fred');
      done();
    });

    it('should leave the array with one less item', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      implementMyArray.myPop(someArray);
      expect(someArray).to.deep.equal(['dogs', 'cats', 7, 45, 'footballs'])
      done();
    });
  });

  describe('my push method', function(){
    it('should push item onto end array', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      var someElement = 'seven';
      implementMyArray.myPush(someArray, someElement);
      expect(someArray).to.deep.equal(['dogs', 'cats', 7, 45, 'footballs', 'fred', 'seven']);
      done();
    });

    it('should return the length of the new array', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      var someElement = 'seven';
      implementMyArray.myPush(someArray, someElement);
      expect(someArray.length).to.deep.equal(7);
      done();
    });
  });

  describe('my shift method', function(){
    it('should remove first item from array', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      implementMyArray.myShift(someArray);
      expect(someArray[0]).to.deep.equal('cats');
      done();
    });

    it('should decrease length of the array', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      implementMyArray.myShift(someArray);
      expect(someArray.length).to.deep.equal(5);
      done();
    });

    it('should return the removed element', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      expect(implementMyArray.myShift(someArray)).to.deep.equal('dogs');
      done();
    });
  });

  describe('my unshift method', function(){
    it('should add new element to first item of array', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      var someElement = '7even';
      implementMyArray.myUnshift(someArray, someElement);
      expect(someArray).to.deep.equal(['7even', 'dogs', 'cats', 7, 45, 'footballs', 'fred']);
      done();
    });

    it('should increase length of the array', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      var someElement = '7even';
      implementMyArray.myUnshift(someArray, someElement);
      expect(someArray.length).to.deep.equal(7);
      done();
    });

    it('should return the new array length', function(done){
      var someArray = ['dogs', 'cats', 7, 45, 'footballs', 'fred'];
      var someElement = '7even';
      expect(implementMyArray.myUnshift(someArray, someElement)).to.deep.equal(7);
      done();
    });
  });

  describe('my unique method', function(){
    it('should return an array w/out duplicate elements', function(done){
      var someArray = ['dogs', 'cats', 7, 7, 'frogs', 7, 9, 'dogs', 'dogs', 'cats'];
      expect(implementMyArray.myUnique(someArray)).to.deep.equal(['dogs', 'cats', 7, 'frogs', 9]);
      done();
    });
  });

  describe('my frequency method', function(){
    it('should return an object containing letters of highest frequency', function(done){
        var someArray = ['assuming', 'the', 'compiler', 'knows', 'best', 'and', 'would', 'optimise', 'it', 'accordingly'];
        expect(implementMyArray.myFrequency(someArray)).to.deep.equal({i: 5, o:5});
        done();
    });
  });

});
