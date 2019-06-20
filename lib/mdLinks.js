"use strict";

var _main = require("./main.js");

var _index = require("./index.js");

var _fs = require("fs");

var ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba';
var ruta3 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.html';
var ruta2 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src';

var mdLinks = function mdLinks(path, opts) {
  return new Promise(function (resolve, reject) {
    if ((0, _index.readAllFiles)(path).length === 0) {
      resolve('esta ruta no contiene archivos md');
    } else if (opts.validate === true) {
      resolve((0, _main.optionLinks)(path));
    } else if (!opts || opts.validate === false) {
      resolve((0, _main.pathMdLinks)(path));
    }
  })["catch"](function (err) {
    if (err.code === 'ENOENT') {
      return 'ruta invalida';
    } else {
      return (0, _main.pathMdLinks)(path);
    }
  });
};

mdLinks(ruta1, {
  validate: true
}).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
});
mdLinks(ruta1, {
  validate: false
}).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
});
mdLinks(ruta2).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
});