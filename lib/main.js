"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionLinks = exports.pathMdLinks = void 0;

var _marked = _interopRequireDefault(require("marked"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _index = require("./index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var callsites = require('callsites');

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
  return links;
};

exports.pathMdLinks = pathMdLinks;

var optionLinks = function optionLinks(ruta) {
  var arrProme = pathMdLinks(ruta).map(function (prop) {
    return (0, _nodeFetch["default"])(prop.href).then(function (res) {
      prop.status = res.status;

      if (res.ok) {
        prop.ok = 'ok';
      } else {
        prop.ok = 'fail';
      }

      return prop;
    })["catch"](function (err) {
      prop.status = 500;
      return prop;
    });
  });
  return Promise.all(arrProme);
};

exports.optionLinks = optionLinks;