var assert = require('assert');
var roman = require('../lib/roman_numeral');


describe('roman', function(){
    it('should be a function', function(){
	assert.equal('function', typeof roman);
    })

    describe('behaviour', function(){
	it('should return \'I\' on 1', function(){
	    assert.equal('I', roman(1));
	})
	it('should return \'V\' on 5', function(){
	    assert.equal('V', roman(5));
	})
    });
});
