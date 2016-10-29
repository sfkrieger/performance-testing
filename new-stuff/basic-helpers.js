
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

function generateArray(arrSize){
  var i, size = (typeof arrSize != 'undefined'? arrSize: 10000);
  var arr = [];
  Uint32Array
  for(i = 0; i < size; i++){
    arr.push(randomInt(0, 19000));
  }

  return arr;
}

module.exports = {
  add: add,
  sort: sort,
  generateArray: generateArray
};
