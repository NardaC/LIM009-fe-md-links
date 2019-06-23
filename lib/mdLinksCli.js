"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksCli = void 0;

var _validateCli = require("./validateCli.js");

var _mdLinks = require("./mdLinks.js");

var _main = require("./main.js");

var clc = require("cli-color");

var ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src';
var option1;
var option2;

var mdLinksCli = function mdLinksCli(path, opt1, opt2) {
  return (0, _mdLinks.mdLinks)(path, {
    validate: false
  }).then(function (res) {
    if ((0, _main.readAllFiles)(res).length === 0) {
      return 'esta ruta no contiene archivos md';
    }
  });
  return (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(function (res) {
    if (path && !opt1 && !opt2) {
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
      // if(readAllFiles(path).length === 0){
      //     return'esta ruta no contiene archivos md'           
      // }
      return (0, _validateCli.stats)(path);
    } else if (path && opt1 === '--validate' && opt2 === '--stats') {
      return (0, _validateCli.BrokenLink)(path);
    } else {
      console.log('holi');
    }
  })["catch"](function (err) {
    return clc.xterm(196)(err);
  });
}; //console.log(mdLinksCli(ruta1, option1 ,option2))


exports.mdLinksCli = mdLinksCli;
mdLinksCli(ruta1, option1, option2).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
});