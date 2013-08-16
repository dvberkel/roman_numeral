function to_i(n) {
    n = parseInt(n || 1);
    if (isNaN(n)) {
	n = 1;
    }
    return n;
}

module.exports = to_i;
