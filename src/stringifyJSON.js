// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj, subObj) {
	var objKeys = Object.keys(obj),
		stringified = '',
		type = '';
	for (var x=0;x<objKeys.length;x++) {
		type = typeof obj[objKeys[x]];
		if (subObj === 1 && type !== 'function' && type !== undefined) {
			stringified += '"' + objKeys[x] + '":';
		}
		if (obj[objKeys[x]] === null) {
			stringified += null;
		} else if (type === 'object') {
			if (Array.isArray(obj[objKeys[x]])) {
                stringified += stringifyJSON(obj[objKeys[x]]);
            } else {
            	stringified += '{' + stringifyJSON(obj[objKeys[x]],1) + '}';
            }
		} else if (type === 'string') {
			stringified += '"' + obj[objKeys[x]] + '"';
		} else if (type === 'function') {

		} else if (type !== 'undefined') {
			stringified += obj[objKeys[x]];
		}
		if (type !== 'function' && x < objKeys.length-1) {
			stringified += ",";
		}
	}
	if (subObj !== 1) {
		return '[' + stringified + ']';
	} else {
		return stringified;
	}
  // your code goes here
};
