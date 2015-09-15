// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

var stringifyJSON = function (obj) {
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
			if (Array.isArray(obj)) {
				for (var x = 0; x < obj.length; x++) {
					stringified += stringifyJSON(obj[x]);
					if (x !== obj.length - 1)
						stringified += ',';
				}
				return '[' + stringified + ']';
			}
			var objKeys = Object.keys(obj);
			for (var x = 0; x < objKeys.length; x++) {
				if (typeof obj[objKeys[x]] !== 'function' && typeof obj[objKeys[x]] !== 'undefined') {
					stringified += '"' + objKeys[x] + '":' + stringifyJSON(obj[objKeys[x]]);
					if (x !== objKeys.length - 1)
						stringified += ',';
				}
			}
			return '{' + stringified + '}';
		default:
			return '';
	}
}