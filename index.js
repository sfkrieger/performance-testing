var nadd = require('bindings')('nadd.node');
var add = require('bindings')('add.node');
var js = require("./js/helpers.js");
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var sortSuite = new Benchmark.Suite;

suite
.add('C Nan add', function() {
	var first = js.getInt();
	var second = js.getInt();
	nadd.add(first, second);
})
.add('C native add', function() {
	var first = js.getInt();
	var second = js.getInt();
	return add.add(first, second);
})
.add('Javascript add', function() {
	var first = js.getInt();
	var second = js.getInt();
	return js.add(first, second);
})
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': true });

function cycle(event) {
  console.log(String(event.target));
}

function complete(a, b) {

  console.log('Fastest: ' + this.filter('fastest').map('name'));
  console.log('Slowest: ' + this.filter('slowest').map('name'));
}