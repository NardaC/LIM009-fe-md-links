"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMd = exports.readDir = exports.readFile = exports.isDirectory = exports.isFile = exports.isPathAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const fspromises = require('fs.promises')
var ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src';
var ruta3 = '‎⁨/Users/narda/Desktop/';
var ruta2 = 'index.js';

var isPathAbsolute = function isPathAbsolute(ruta) {
  var absolute = _path["default"].isAbsolute(ruta);

  if (absolute) {
    return absolute;
  } else {
    return _path["default"].resolve(ruta);
  } //return absolute

}; // function filePathExists(filePath) {
//     return new Promise((resolve, reject) => {
//       fs.stat(filePath, (err, stats) => {
//         if (err && err.code === 'ENOENT') {
//           return resolve(false);
//         } else if (err) {
//           return reject(err);
//         }
//         if (stats.isFile() || stats.isDirectory()) {
//           return resolve(true);
//         }
//       });
//     });
//   }
//    console.log(filePathExists(ruta1));


exports.isPathAbsolute = isPathAbsolute;

var isFile = function isFile(ruta) {
  var stats = _fs["default"].statSync(ruta);

  return stats.isFile();
}; //console.log(isFile('holi'));


exports.isFile = isFile;

var isDirectory = function isDirectory(ruta) {
  var stats = _fs["default"].statSync(ruta);

  return stats.isDirectory();
}; //console.log(isFile(ruta2));
// console.log(isDirectory(ruta2));
// console.log(isDirectory(ruta1));


exports.isDirectory = isDirectory;

var readFile = function readFile(ruta) {
  var archivo = _fs["default"].readFileSync(ruta, 'utf-8');

  return archivo;
}; //console.log(readFile(ruta2));


exports.readFile = readFile;

var readDir = function readDir(ruta) {
  var carpeta = _fs["default"].readdirSync(ruta, 'utf-8');

  return carpeta;
}; //console.log(readDir(ruta1));


exports.readDir = readDir;

var isMd = function isMd(str) {
  var md = _path["default"].extname(str) === '.md';
  return md;
}; //console.log(isMd('prueba.md'));


exports.isMd = isMd;