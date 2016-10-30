var nadd = require('bindings')('nadd.node');
var c = require('bindings')('add.node');
var js = require("./new-stuff/basic-helpers.js");
var Benchmark = require('benchmark');
var suite10 = new Benchmark.Suite;
var suite100 = new Benchmark.Suite;
var suite1000 = new Benchmark.Suite;
var suite10000 = new Benchmark.Suite;

var sortSuite = new Benchmark.Suite;

/**
 * TEN Is
 */
suite10
.add('C native sort', function() {
	 var arr = js.generateArray(10);
	 c.sort(arr);
})
.add('C native type sort', function() {
	var arr = js.generateTypedArray(10);
	c.typed_sort(arr);
})
.add('Javascript sort', function() {
	 var arr = js.generateArray(10);
	 js.sort(arr);
})
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': true });


///**
// * 100 Is
// */
//suite100
//.add('C native sort', function() {
//	 var arr = js.generateArray(100);
//	 c.sort(arr);
//})
//.add('C native type sort', function() {
//	var arr = js.generateTypedArray(100);
//	c.typed_sort(arr);
//})
//.add('Javascript sort', function() {
//	 var arr = js.generateArray(100);
//	 c.sort(arr);
//})
//.on('cycle', cycle)
//.on('complete', complete)
//.run({ 'async': true });
//
///**
// * 1000 Is
// */
//suite1000
//.add('C native sort', function() {
//	 var arr = js.generateArray(1000);
//	 c.sort(arr);
//})
//.add('C native type sort', function() {
//	var arr = js.generateTypedArray(1000);
//	c.typed_sort(arr);
//})
//.add('Javascript sort', function() {
//	 var arr = js.generateArray(1000);
//	 c.sort(arr);
//})
//.on('cycle', cycle)
//.on('complete', complete)
//.run({ 'async': true });
//
///**
// * 10000 Is
// */
//suite10000
//.add('C native sort', function() {
//	 var arr = js.generateArray(10000);
//	 c.sort(arr);
//})
//.add('C native type sort', function() {
//	var arr = js.generateTypedArray(10000);
//	c.typed_sort(arr);
//})
//.add('Javascript sort', function() {
//	 var arr = js.generateArray(10000);
//	 c.sort(arr);
//})
//.on('cycle', cycle)
//.on('complete', complete)
//.run({ 'async': true });


function cycle(event) {
  console.log(String(event.target));
}

function complete(a, b) {

  console.log('Fastest: ' + this.filter('fastest').map('name'));
  console.log('Slowest: ' + this.filter('slowest').map('name'));
}