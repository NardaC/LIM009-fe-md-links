"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _main = require("./main.js");

var _index = require("./index.js");

var _fs = require("fs");

var clc = require("cli-color");

var mdLinks = function mdLinks(path, opts) {
  return new Promise(function (resolve, reject) {
    try {
      if (opts.validate === true) {
        resolve((0, _main.optionLinks)(path));
      } else if (!opts || opts.validate === false) {
        resolve((0, _main.pathMdLinks)(path));
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        reject(clc.xterm(196)('ruta invalida'));
      } else {
        reject((0, _main.pathMdLinks)(path));
      }
    }
  });
};

exports.mdLinks = mdLinks;