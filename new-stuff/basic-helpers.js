var MAX_INT_SIZE = 65535; //2^16 - 1 16 bits, 2 bytes

function add(a, b) {
  return a + b;
}

function randomInt(min, max) {
  return Math.random() * (max - min) + min;
}

function sort(arr){
  arr.sort(compare);
}

function compare(first, second) {
  if (first == second)
    return 0;
  if (first < second)
    return -1;
  else
    return 1;
}

function generateTypedArray(arrSize){
  var i, size = (typeof arrSize != 'undefined'? arrSize: 10000);
  //each element is 2 bytes
  var buffer = new ArrayBuffer(size*2);
  var arr = new Uint16Array(buffer);
  for(i = 0; i < size; i++){
    arr[i] = randomInt(0, MAX_INT_SIZE);
  }

  return arr;
}

function generateArray(arrSize){
	var i, size = (typeof arrSize != 'undefined'? arrSize: 10000);
	var arr = [];
	for(i = 0; i < size; i++){
		arr.push(randomInt(0, MAX_INT_SIZE));
	}
	
	return arr;
}

module.exports = {
  add: add,
  sort: sort,
  generateArray: generateArray
//  generateArray: generateTypedArray
};
