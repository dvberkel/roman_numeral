var responses = [
    { threshold : 10  , message : 'X' },
    { threshold : 5   , message : 'V' },
    { threshold : 1   , message : 'I' }
];

function roman(n) {
    for (var index = 0; index < responses.length; index++) {
	var response = responses[index];
	if (n >= response.threshold) {
	    return response.message + roman(n - response.threshold);
	}
    }
    return '';
}

module.exports = roman
