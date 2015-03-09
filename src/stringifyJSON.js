// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var objKeys = Object.keys(obj),
		stringified = "";
	for (var x=0;x<objKeys.length;x++) {
		if (obj[objKeys[x]] === null) {
			stringified += null + ',';
		} else if (typeof obj[objKeys[x]] === 'object') {
			if (Array.isArray(obj[objKeys[x]])) {
                stringified += '[' + stringifyJSON(obj[objKeys[x]]) + ']';
            }
		} else if (typeof obj[objKeys[x]] === 'string') {
			stringified += '"' + obj[objKeys[x]] + '"';
		} else if (typeof obj[objKeys[x]] === 'function') {

		} else {
			stringified += obj[objKeys[x]];
		}
		if (typeof obj[objKeys[x]] !== 'function' && x < objKeys.length-1) {
			stringified += ",";
		}
	}
	return stringified;
  // your code goes here
};
