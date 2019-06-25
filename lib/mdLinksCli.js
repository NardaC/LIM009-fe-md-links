#! / usr / bin / env nodo
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
var option1 = '--validate';
var option2 = '--stats';

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
  })["catch"](function (err) {
    return clc.xterm(196)(err);
  });
}; //console.log(mdLinksCli(ruta1, option1 ,option2))
// mdLinksCli('https://perurrr.com/',option1,option2)
// .then(res => console.log(res))
// .catch(err=> console.log(err))


exports.mdLinksCli = mdLinksCli;