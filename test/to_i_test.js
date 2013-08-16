var assert = require('assert');
var to_i = require('../lib/to_i');

describe('to_i', function(){
    var cases = [
	[1, 1],
	[2, 2],
	[3, 3],
	[10, 10],
	[100, 100],
	[1000, 1000],
	["a string", 1],
	[undefined, 1],
	[NaN, 1]
    ];

    for (var index = 0; index < cases.length; index++) {
	var current = cases[index];
	var argument = current[0]; var expected = current[1];
	it('should convert \'' + argument + '\' to \'' + expected + '\'', function(){

	})
    }
});
