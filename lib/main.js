"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathMdLinks = void 0;

var _index = require("./index.js");

var ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba';
var ruta2 = 'index.js';

var pathMdLinks = function pathMdLinks(ruta) {
  var absoPath = (0, _index.isPathAbsolute)(ruta);
  var pathMd = (0, _index.readAllFiles)(absoPath);
  return (0, _index.readFile)(pathMd);
};

exports.pathMdLinks = pathMdLinks;
console.log(pathMdLinks(ruta2));