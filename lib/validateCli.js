"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenLink = exports.stats = void 0;

var _main = require("./main.js");

var _mdLinks = require("./mdLinks.js");

var _index = require("./index.js");

var clc = require("cli-color");

var ruta = [{
  href: 'https://www.youtube.com/',
  text: 'youtube',
  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md',
  statusText: 'OK',
  status: 200
}, {
  href: 'https://www.google.com/',
  text: 'google',
  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md',
  statusText: 'OK',
  status: 200
}, {
  href: 'https://peru.com/',
  text: 'peru',
  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir12/file121.md',
  statusText: 'OK',
  status: 200
}, {
  href: 'https://perurrr.com/',
  text: 'peruroto',
  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir12/file121.md',
  statusText: 'Fail',
  status: 'Not Found'
}, {
  href: 'https://github.com/Narda//-',
  text: 'youtuberoto',
  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md',
  statusText: 'Not Found',
  status: 404
}, {
  href: 'https://www.googleR.com/',
  text: 'googleroto',
  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md',
  statusText: 'Fail',
  status: 'Not Found'
}, {
  href: 'https://www.facebookR.com/',
  text: '',
  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md',
  statusText: 'Fail',
  status: 'Not Found'
}, {
  href: 'https://www.facebook.com/',
  text: 'facebook',
  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md',
  statusText: 'OK',
  status: 200
}];

var stats = function stats(path) {
  var arrHref = path.map(function (prop) {
    return prop.href;
  });
  var uniqueLinks = path.filter(function (item, index, array) {
    //console.log(index)
    return array.indexOf(item) === index; //console.log(array.indexOf(item))
  });
  var res = "Total: ".concat(arrHref.length, "\nUnique: ").concat(uniqueLinks.length);
  return clc.xterm(206)(res);
}; //console.log(stats(ruta));


exports.stats = stats;

var brokenLink = function brokenLink(path) {
  var arrHref = path.map(function (prop) {
    return prop.href;
  });
  var uniqueLinks = path.filter(function (item, index, array) {
    //console.log(index)
    return array.indexOf(item) === index; //console.log(array.indexOf(item))
  });
  var broken = path.filter(function (prop) {
    if (prop.status === 'Not Found' || prop.statusText === 'fail') {
      return prop.status;
    } else if (prop.status >= 400) {
      return prop.status;
    } //return prop.status

  });
  var res = "Total: ".concat(arrHref.length, "\nUnique: ").concat(uniqueLinks.length, "\nBroken: ").concat(broken.length);
  return clc.xterm(206)(res);
}; //console.log(brokenLink(ruta));


exports.brokenLink = brokenLink;