"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readAllFiles = exports.isMd = exports.readDir = exports.readFile = exports.isDirectory = exports.isFile = exports.isPathAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isPathAbsolute = function isPathAbsolute(ruta) {
  var absolute = _path["default"].isAbsolute(ruta);

  if (absolute) {
    return ruta;
  } else {
    return _path["default"].resolve(ruta);
  }
};

exports.isPathAbsolute = isPathAbsolute;

var isFile = function isFile(ruta) {
  var stats = _fs["default"].statSync(ruta);

  return stats.isFile();
};

exports.isFile = isFile;

var isDirectory = function isDirectory(ruta) {
  var stats = _fs["default"].statSync(ruta);

  return stats.isDirectory();
};

exports.isDirectory = isDirectory;

var readFile = function readFile(ruta) {
  var archivo = _fs["default"].readFileSync(ruta, 'utf-8');

  return archivo;
};

exports.readFile = readFile;

var readDir = function readDir(ruta) {
  var arrCarpeta = _fs["default"].readdirSync(ruta, 'utf-8');

  return arrCarpeta.map(function (element) {
    return _path["default"].join(ruta, element);
  });
};

exports.readDir = readDir;

var isMd = function isMd(str) {
  var md = _path["default"].extname(str) === '.md';
  return md;
};

exports.isMd = isMd;

var readAllFiles = function readAllFiles(ruta) {
  var arr = [];

  if (isFile(ruta)) {
    if (isMd(ruta)) {
      arr.push(ruta);
    }
  } else {
    // es directorio o archivo no md
    var dir = _fs["default"].readdirSync(ruta);

    dir.forEach(function (hijo) {
      var arrNew = readAllFiles(_path["default"].join(ruta, hijo));
      arr = arr.concat(arrNew);
    });
  }

  return arr;
};

exports.readAllFiles = readAllFiles;