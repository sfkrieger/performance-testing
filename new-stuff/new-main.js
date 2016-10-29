var js = require('./basic-helpers.js');
var c = require('bindings')('add.node');

var arr = js.generateArray(5);
//js.sort(arr)
//var arr = c.sort(arr);
console.log(typeof arr);
var arr = c.typed_sort(arr);
console.log("This is the arr length " + arr.length);
