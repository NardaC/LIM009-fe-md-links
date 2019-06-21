"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsValidate = exports.stats = void 0;

var _main = require("./main.js");

var ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba';

var stats = function stats(path) {
  var arrHref = (0, _main.pathMdLinks)(path).map(function (prop) {
    return prop.href;
  });
  var uniqueLinks = arrHref.filter(function (item, index, array) {
    //console.log(index)
    return array.indexOf(item) === index; //console.log(array.indexOf(item))
  });
  return {
    total: arrHref.length,
    unicos: uniqueLinks.length
  };
}; //console.log(stats(ruta1)


exports.stats = stats;

var statsValidate = function statsValidate(path) {
  var arrHref = path.map(function (prop) {
    return prop.href;
  });
  var uniqueLinks = arrHref.filter(function (item, index, array) {
    //console.log(index)
    return array.indexOf(item) === index; //console.log(array.indexOf(item))
  });
  var broken = path.filter(function (prop) {
    if (prop.status === 'Not Found' || prop.status === 'Fail') {
      return prop.status;
    } else if (prop.status >= 400) {
      return prop.status;
    } //return prop.

  });
  return {
    total: arrHref.length,
    unicos: uniqueLinks.length,
    broken: broken.length
  };
};

exports.statsValidate = statsValidate;
(0, _main.optionLinks)(ruta1).then(function (res) {
  return console.log(statsValidate(res));
});