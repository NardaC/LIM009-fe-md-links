#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenLink = exports.stats = void 0;

var _main = require("./main.js");

var _mdLinks = require("./mdLinks.js");

var _index = require("./index.js");

var _fs = require("fs");

var clc = require("cli-color");

var stats = function stats(path) {
  var arrHref = path.map(function (prop) {
    return prop.href;
  });
  var uniqueLinks = arrHref.filter(function (item, index, array) {
    //console.log(index)  
    return array.indexOf(item) === index; //console.log(array.indexOf(item))
  });
  var res = "Total: ".concat(arrHref.length, "\nUnique: ").concat(uniqueLinks.length);
  return clc.xterm(206)(res);
};

exports.stats = stats;

var brokenLink = function brokenLink(path) {
  var arrHref = path.map(function (prop) {
    return prop.href;
  });
  var uniqueLinks = arrHref.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
  var broken = path.filter(function (prop) {
    if (prop.status === 'Not Found' || prop.statusText === 'fail') {
      return prop.status;
    } else if (prop.status >= 400) {
      return prop.status;
    }
  });
  var res = "Total: ".concat(arrHref.length, "\nUnique: ").concat(uniqueLinks.length, "\nBroken: ").concat(broken.length);
  return clc.xterm(206)(res);
};

exports.brokenLink = brokenLink;