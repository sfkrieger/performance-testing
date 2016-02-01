var addon = require('bindings')('addon.node')
var add = require('bindings')('add.node')

//========= JS ADD FUNCTIONS ===========
addJS = function(a, b){
	return a + b;
}

addTemp = function(a, b){
	var first = a;
	var second = b;
	
	var sum = first + second;
	return sum;
}


//console.log('This should be eight:', addon.add(3, 5));
//console.log('This should be eight -- no nan:', add.add(3, 5));

//========= FUNCTIONS FOR BENCHMARKING
runMultipleTimes = function(addFn, firstNum, secondNum, noTimes){
	var i;
	var sum = 0;
	for(i = 0; i < noTimes; i++){
		sum = sum + addFn(firstNum, secondNum);
//		console.log("Heres the current sum " + sum + " at " + i);
	}
	
	return sum;
	
}

benchmark = function(fn, a, b, times){
//	var noTimes = (typeof times != undefined? times: 100000000000)
	var noTimes = 1000000;
	var start = Date.now();
	var result = runMultipleTimes(fn, a, b, noTimes);
	var duration = Date.now() - start;
	console.log("In benchmark " + duration + " and result was " + result);
	return {
		duration : duration,
		result : result
	};
}

//------- BENCHMARK ADD ----------//
benchmarkAdd = function(){
	var nanres = benchmark(addon.add, 1, 2);
	var cres = benchmark(add.add, 1, 2);
	var jsresTempVar = benchmark(addTemp, 1, 2);
	var jsres = benchmark(addJS, 1, 2);
	
	return {
		c : cres,
		nan : nanres,
		js : jsresTempVar,
		jsFast : jsres
	}
}

module.exports = {
	benchmarkAdd : benchmarkAdd
};
