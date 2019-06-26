"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksCli = void 0;

var _validateCli = require("./validateCli.js");

var _mdLinks = require("./mdLinks.js");

var clc = require("cli-color");

path = process.arg[2];
opt1 = process.arg[3];
opt2 = process.arg[4];

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
mdLinksCli(path, opt1, opt2).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
});