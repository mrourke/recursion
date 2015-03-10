// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
){
	var elements = [];

	function recursion (node) {
		if (node.classList.contains(className)) {
			elements.push(node);
		}
		if (node.hasChildNodes()) {
			for (var i=0; i<node.children.length; i++) {
				recursion(node.children[i]);
			}
		}
	};
	recursion(document.body);
	return elements;
  // your code here

};
