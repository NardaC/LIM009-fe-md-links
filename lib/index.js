"use strict";

var path = require('path');

var ruta3 = '‎⁨/Users/narda/Desktop/';
var ruta2 = 'index.js';

var isPathAbsolute = function isPathAbsolute(ruta) {
  var absolute = path.isAbsolute(ruta);

  if (absolute) {
    return absolute; //console.log("es absoluta");
  } else {
    return path.resolve(ruta); //console.log("no es absoluta");
  } //return absolute

};

module.exports = {
  isPathAbsolute: isPathAbsolute
};
console.log(isPathAbsolute(ruta2));