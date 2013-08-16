var responses = [
    { threshold : 1000 , message : 'M' , allowed_step : 100 , prefix : 'C' },
    { threshold : 500  , message : 'D' , allowed_step : 100 , prefix : 'C' },
    { threshold : 100  , message : 'C' , allowed_step : 10  , prefix : 'X' },
    { threshold : 50   , message : 'L' , allowed_step : 10  , prefix : 'X' },
    { threshold : 10   , message : 'X' , allowed_step : 1   , prefix : 'I' },
    { threshold : 5    , message : 'V' , allowed_step : 1   , prefix : 'I' },
    { threshold : 1    , message : 'I' }
];

function roman(n) {
    if (n === 0) { return ''; }
    for (var index = 0; index < responses.length; index++) {
	var response = responses[index];
	if (!!response.allowed_step && (n + response.allowed_step) === response.threshold) {
	    return response.prefix + response.message;
	}
	if (n >= response.threshold) {
	    return response.message + roman(n - response.threshold);
	}
    }
}

module.exports = roman
