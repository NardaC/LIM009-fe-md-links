"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionLinks = exports.pathMdLinks = void 0;

var _marked = _interopRequireDefault(require("marked"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _index = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba';
var ruta2 = 'index.js';
var ruta3 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md';

var pathMdLinks = function pathMdLinks(ruta) {
  var absoPath = (0, _index.isPathAbsolute)(ruta);
  var pathMd = (0, _index.readAllFiles)(absoPath);
  var links = [];
  pathMd.map(function (file) {
    var markLink = (0, _index.readFile)(file);
    var renderer = new _marked["default"].Renderer(markLink);

    renderer.link = function (href, title, text) {
      links.push({
        href: href,
        text: text,
        ruta: file
      });
    };

    (0, _marked["default"])(markLink, {
      renderer: renderer
    });
  });
  return links; //console.log(marked(pathMd));
}; //console.log(pathMdLinks(ruta1))


exports.pathMdLinks = pathMdLinks;

var optionLinks = function optionLinks(ruta) {
  var arrProme = pathMdLinks(ruta).map(function (prop) {
    //console.log(prop.href)
    return (0, _nodeFetch["default"])(prop.href).then(function (res) {
      if (res.status <= 399 || res.status < 600) {
        prop.statusText = res.statusText;
        prop.status = res.status;
      }

      return prop;
    })["catch"](function (err) {
      prop.statusText = "Not ok"; //prop.status =err.code

      prop.status = "Not Found";
      return prop;
    });
  });
  return Promise.all(arrProme);
}; //console.log(optionLinks(ruta1))


exports.optionLinks = optionLinks;
optionLinks(ruta1).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
});