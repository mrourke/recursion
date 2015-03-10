// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON2 = function(obj, subObj) {
	if (obj === null)
        return String(obj);
    var objKeys = Object.keys(obj),
		stringified = '',
		type = '';
	if (objKeys.length === 0 && typeof obj !== 'function' && typeof obj !== 'undefined')
	    return String(obj);
	if (typeof obj === 'string')
	    return '"'+obj+'"';
	for (var x=0;x<objKeys.length;x++) {
		type = typeof obj[objKeys[x]];
		if (subObj === 1 && type !== 'function' && type !== undefined) {
			stringified += '"' + objKeys[x] + '":';
		}
		if (obj[objKeys[x]] === null) {
			stringified += null;
		} else if (type === 'object') {
			if (Array.isArray(obj[objKeys[x]])) {
                stringified += '['+stringifyJSON(obj[objKeys[x]])+']';
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
	/*if (subObj !== 1) {
		return '[' + stringified + ']';
	} else {*/
		return stringified;
	//}
  // your code goes here
};

var stringifyJSON = function(obj) {
	var stringified = '';
	switch (typeof obj) {
		case 'number':
			return String(obj);
		case 'string':
			return '"' + obj + '"';
		case 'boolean':
			return String(obj);
		case 'object':
			if (obj === null) 
				return 'null';
			var objKeys = Object.keys(obj);
			
	}

}