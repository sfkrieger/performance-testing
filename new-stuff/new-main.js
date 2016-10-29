var js = require('./basic-helpers.js');
var c = require('bindings')('add.node');

var arr = js.generateArray(1000);
var arr = js.sort(arr);
