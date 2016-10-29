/**
 * 
 */
//========= JS ADD FUNCTIONS ===========
var addJS = function(a, b){
	return a + b;
}

var addTemp = function(a, b){
	var first = a;
	var second = b;
	
	var sum = first + second;
	return sum;
}

var add_empty = function(a, b){
	return;
}

module.exports = {
		addJS : addJS,
		addTemp : addTemp,
		add_empty : add_empty,
};