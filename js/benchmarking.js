var nadd = require('bindings')('nadd.node');
var add = require('bindings')('add.node');
var jsAdd = require("./add.js");
var helpers = require("./helpers.js");

var NO_TIMES = 1000000;
var ARR_SIZE = 10000;
//console.log('This should be eight:', addon.add(3, 5));
//console.log('This should be eight -- no nan:', add.add(3, 5));

//========= FUNCTIONS FOR BENCHMARKING

//---------- RUNNING IN SEQUENCE ------------
//runs the add function with parameters
run = function(fn, noTimes, arr){
	var i;
	var sum = 0;
	for(i = 0; i < noTimes; i++){
		if(typeof arr != 'undefined'){
			fn.apply(null, arr);
		}else{
			fn();
		}
	}
}

//--------- TIMESTAMPING ------------
//benchmarks an empty function
benchmarkEmpty = function(fn, args, times){
	var noTimes = (typeof times != 'undefined'? times: NO_TIMES);
	var start = Date.now();
	var result = run(fn, noTimes, args);
	var duration = Date.now() - start;
	return duration;
}

benchmark = function(fn, args, times){
	var noTimes = (typeof times != 'undefined'? times: NO_TIMES);
	var start = Date.now();
	var result = run(fn, noTimes, args);
	var duration = Date.now() - start;
	return duration;
}

//------- BENCHMARK ADD ----------//
benchmarkAdd = function(){
	var args = [1, 2];
	var nanres = benchmark(nadd.add, args);
	var cres = benchmark(add.add, args);
	var jsresTempVar = benchmark(jsAdd.addTemp, args);
	var jsres = benchmark(jsAdd.addJS, args);
	
	return {
		c : cres,
		nan : nanres,
		js : jsresTempVar,
		jsFast : jsres
	}
}

benchmarkEmptyAdd = function(){
	var args = [1, 2];
	var nanres = benchmarkEmpty(nadd.add_empty, args);
	var cres = benchmarkEmpty(add.add_empty, args);
	var jsres = benchmarkEmpty(add_empty, args);
	
	return {
		c : cres,
		nan : nanres,
		js : jsres
	};
}

//------- BENCHMARK SORT ----------//
benchmarkSort = function(){
	var arr = helpers.generateArray(ARR_SIZE);
	var args = [arr];
	var cres = benchmark(add.sort, args, 10);
//	console.log("Here's the sorted array: %j", arr);
	
	
	var arr = helpers.generateArray(ARR_SIZE);
	var args = [arr];
	var jsres = benchmark(helpers.sort, args, 10);
//	console.log("Here's the sorted array: %j", arr);
	return {
		c: cres,
		js: jsres
	};
	
}

toConsole = function(results){
	console.log("JS time: %s msec", results.js);
	console.log("C time: %s msec", results.c);
	
	if(typeof results.nan != 'undefined')
		console.log("Nan time: %s msec", results.nan);
	
}

module.exports = {
	toConsole : toConsole,
	benchmarkEmptyAdd : benchmarkEmptyAdd,
	benchmarkAdd : benchmarkAdd,
	benchmarkSort : benchmarkSort
};
