var nadd = require('bindings')('nadd.node');
var add = require('bindings')('add.node');
var js = require('./basic-helpers.js');
var ARR_SIZE = 1000;

var benchmark = function(fn, args, times){
  var noTimes = (typeof times != 'undefined'? times: 1);
  var start = Date.now();
  var result = run(fn, noTimes, args);
  var duration = Date.now() - start;
  return duration;
}

var benchmarkSort = function(arrSize){
  var size = arrSize || ARR_SIZE
  var arr = js.generateArray(size);
  var args = [arr];
  var cres = benchmark(add.sort, args, 10);

  var arr = helpers.generateArray(size);
  var args = [arr];
  var jsres = benchmark(js.sort, args, 10);

  return {
    c: cres,
    js: jsres
  };

}

