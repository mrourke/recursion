var getElementsByClassName = function (className, node) {
	var elements = [];

	function recursion(node) {
		if (node.classList.contains(className)) {
			elements.push(node);
		}
		if (node.hasChildNodes()) {
			for (var i = 0; i < node.children.length; i++) {
				recursion(node.children[i]);
			}
		}
	};
	recursion(document.body);
	return elements;
};
