'use strict';
var assert = require('assert');
var path = require('path');
var File = require('./lib/file.js');

var t = new File('./test/fixtures/usemin.html');

console.log( t );
