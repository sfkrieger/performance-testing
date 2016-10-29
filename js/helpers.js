/**
 *
 * HELPERS
**/

var str =  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var MAX_INT_SIZE = 65535; //2^16 - 1 16 bits, 2 bytes

var randomInt = function(min, max) {
	  return Math.random() * (max - min) + min;
}

var generateArray = function(arrSize){
	var i, size = (typeof arrSize != 'undefined'? arrSize: 10000);
	var arr = [];
	for(i = 0; i < size; i++){
		arr.push(randomInt(0, MAX_INT_SIZE));
	}
	
	return arr;
}

var generateTypedArray = function(arrSize){
	  var i, size = (typeof arrSize != 'undefined'? arrSize: 10000);
	  //each element is 2 bytes
	  var buffer = new ArrayBuffer(size*2);
	  var arr = new Uint16Array(buffer);
	  for(i = 0; i < size; i++){
	    arr[i] = randomInt(0, MAX_INT_SIZE);
	  }

	  return arr;
	}

var compare = function(first, second)
{
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1; 
}

var sort = function(arr){
	arr.sort(compare);
}

var create_object = function(){
	var obj = {};
	for(var i = 0; i < 50 ; i++){
		var propName = str.substring(i, 63);
		obj[propName] = i;
	}
	
	return obj;
}

var create_object_passing = function(){
	var obj = {};
	for(var i = 0; i < 50 ; i++){
		if(i % 2 == 0){
			var propName = str.substring(i, 63);
			obj[propName] = i;
		}else{
			volley(obj, i);
		}
	}
	
	return obj;
}

var volley = function(obj, i){
	var propName = str.substring(i, 63);
	obj[propName] = i;
}

var create_object_pcompare = function(){
	var obj = {};
	for(var i = 0; i < 50 ; i++){
		if(i < 100){
			var propName = str.substring(i, 63);
			obj[propName] = i;
		}
		
		if(i % 2 != 0)
			doNothin();
	}
	
	return obj;
}

var doNothin = function(){
	return;
}


module.exports = {
//		compare: compare,
		generateArray: generateArray,
		generateTypedArray: generateTypedArray,
		sort: sort,
		create_object: create_object,
		create_object_pcompare: create_object_pcompare,
		create_object_passing: create_object_passing
};