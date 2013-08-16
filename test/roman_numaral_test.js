var assert = require('assert');
var roman = require('../lib/roman_numeral');


describe('roman', function(){
    it('should be a function', function(){
	assert.equal('function', typeof roman);
    })

    describe('behaviour', function(){
	var cases = [
	    ["I",      1],
	    ["V",      5],
	    ["X",     10],
	    ["II",     2],
	    ["III",    3],
	    ["VI",     6],
	    ["VII",    7],
	    ["VIII",   8],
	    ["XI",    11],
	    ["XII",   12],
	    ["XIII",  13],
	    ["XV",    15],
	    ["XVI",   16],
	    ["XVII",  17],
	    ["XVIII", 18],
	    ["XX",    20],
	    ["IV",     4],
	    ["IX",     9],
	    ["XIX",   19],
	    ["L",     50],
	    ["IL",    49],
	    ["LI",    51],
	    ["LV",    55],
	    ["LIX",   59],
	    ["LX",    60],
	    ["LXI",   61],
	    ["LXIV",  64],
	    ["LXV",   65],
	    ["LXVI",  66],
	    ["XL",    40],
	    ["C",    100],
	    ["XC",    90],
	    ["D",    500],
	    ["CD",   400],
	    ["M",   1000],
	    ["CM",   900],
	];
	for (var index = 0; index < cases.length; index++) {
	    var current = cases[index];
	    var expected = current[0]; var n = current[1];
	    it('should return \'' + expected + '\' on ' + n, function(){
		assert.equal(roman(n), expected);
	    });
	}
    });
});
