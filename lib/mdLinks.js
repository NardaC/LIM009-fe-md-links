"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _main = require("./main.js");

var _index = require("./index.js");

var _fs = require("fs");

var ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba'; // const ruta3 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.html'

var ruta2 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src'; // const mdLinks = (path, opts) => {
//     return new Promise((resolve, reject) => {
//         if(readAllFiles(path).length === 0){
//             resolve('esta ruta no contiene archivos md')
//         }else if(opts.validate === true){
//             resolve(optionLinks(path))
//         } else if(!opts || opts.validate === false){
//             reject(pathMdLinks(path))
//         }
//     })
//     .catch(err => {
//         if(err.code === 'ENOENT'){
//             return 'ruta invalida'
//         }else{
//             return pathMdLinks(path)
//         }
//      })
// }

var mdLinks = function mdLinks(path, opts) {
  return new Promise(function (resolve, reject) {
    try {
      if ((0, _index.readAllFiles)(path).length === 0) {
        resolve('esta ruta no contiene archivos md');
      } else if (opts.validate === true) {
        resolve((0, _main.optionLinks)(path));
      } else if (!opts || opts.validate === false) {
        resolve((0, _main.pathMdLinks)(path));
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        reject('ruta invalida');
      } else {
        reject((0, _main.pathMdLinks)(path));
      }
    }
  });
}; // mdLinks(ruta2, {validate:true})
// .then(res => console.log(res))
// .catch(err => console.log(err))
// mdLinks(ruta2, {validate:false})
// .then(res => console.log(res))
// .catch(err => console.log(err))
// mdLinks('jbnnm')
// .then(res => console.log(res))
// .catch(err => console.log(err))


exports.mdLinks = mdLinks;