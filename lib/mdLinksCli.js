#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksCli = void 0;

var _validateCli = require("./validateCli.js");

var _mdLinks = require("./mdLinks.js");

var clc = require("cli-color");

var ruta = process.argv[2];
var optn1 = process.argv[3];
var optn2 = process.argv[4];

var mdLinksCli = function mdLinksCli(path, opt1, opt2) {
  return (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(function (res) {
    if (res.length === 0) {
      return clc.xterm(196)('esta ruta no contiene archivos md');
    } else if (path && !opt1 && !opt2) {
      var newArr = res.map(function (prop) {
        return "".concat(prop.ruta, " ").concat(prop.href, " ").concat(prop.text);
      });
      return clc.xterm(37)(newArr.toString().replace(/,/g, '\n'));
    } else if (path && opt1 === '--validate' && !opt2) {
      var _newArr = res.map(function (prop) {
        return "".concat(prop.ruta, " ").concat(prop.href, " ").concat(prop.text, " ").concat(prop.statusText, " ").concat(prop.status);
      });

      return clc.xterm(116)(_newArr.toString().replace(/,/g, '\n'));
    } else if (path && opt1 === '--stats' && !opt2) {
      return (0, _validateCli.stats)(res);
    } else if (path && opt1 === '--validate' && opt2 === '--stats') {
      return (0, _validateCli.brokenLink)(res);
    }
  });
};

exports.mdLinksCli = mdLinksCli;
mdLinksCli(ruta, optn1, optn2).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
});