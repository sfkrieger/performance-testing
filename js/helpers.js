/**
 *
 * HELPERS
**/

getRand = function(min, max) {
    return Math.random() * (max - min) + min;
}

generateArray = function(arrSize){
	var i, size = (typeof arrSize != 'undefined'? arrSize: 10000);
	var arr = [];
	for(i = 0; i < size; i++){
		arr.push(getRand(0, 19000));
	}
	
	return arr;
}

compare = function(first, second)
{
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1; 
}

sort = function(arr){
	arr.sort(compare);
}

module.exports = {
//		compare: compare,
		generateArray: generateArray,
		sort: sort
};