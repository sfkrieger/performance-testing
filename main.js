/**
 * 
 */

var add = require("./add.js");

var results = add.benchmarkAdd();

console.log("C sum: %s, time: %s msec", results.c.result, results.c.duration);
console.log("NAn sum: %s, time: %s msec", results.nan.result, results.nan.duration);
console.log("JS regular sum: %s, time: %s msec", results.js.result, results.js.duration);
console.log("JS fast sum: %s, time: %s msec", results.jsFast.result, results.jsFast.duration);
