var assert = require('assert');
var roman = require('../lib/roman_numeral');


describe('roman', function(){
    it('should be a function', function(){
	assert.equal('function', typeof roman);
    })

    describe('behaviour', function(){
	var cases = [
	    ["I", 1],
	    ["V", 5],
	    ["X", 10],
	];
	for (var index = 0; index < cases.length; index++) {
	    var current = cases[index];
	    var expected = current[0]; var n = current[1];
	    it('should return \'' + expected + '\' on ' + n, function(){
		assert.equal(expected, roman(n));
	    });
	}
    });
});
