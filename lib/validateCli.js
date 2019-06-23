"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrokenLink = exports.stats = void 0;

var _main = require("./main.js");

var clc = require("cli-color");

var ruta = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba';

var stats = function stats(path) {
  var arrHref = (0, _main.optionLinks)(path).then(function (res) {
    res.map(function (prop) {
      return prop.href;
    });
  });
  var uniqueLinks = (0, _main.optionLinks)(path).then(function (res) {
    res.filter(function (item, index, array) {
      //console.log(index)
      return array.indexOf(item) === index; //console.log(array.indexOf(item))
    });
  });
  var res = "Total: ".concat(arrHref.length, "\nUnique: ").concat(uniqueLinks.length);
  return clc.xterm(206)(res); //return ({total: arrHref.length,unicos: uniqueLinks.length})
}; //console.log(stats(ruta))


exports.stats = stats;

var BrokenLink = function BrokenLink(path) {
  var arrHref = (0, _main.optionLinks)(path).then(function (res) {
    res.map(function (prop) {
      return prop.href;
    });
  });
  var uniqueLinks = (0, _main.optionLinks)(path).then(function (res) {
    res.filter(function (item, index, array) {
      //console.log(index)
      return array.indexOf(item) === index; //console.log(array.indexOf(item))
    });
  });
  var broken = (0, _main.optionLinks)(path).then(function (res) {
    res.filter(function (prop) {
      if (prop.status === 'Not Found' || prop.status === 'Fail') {
        prop.status;
      } else if (prop.status >= 400) {
        prop.status;
      }

      return prop.status;
    });
  });
  var resp = "Total: ".concat(arrHref.length, "\nUnique: ").concat(uniqueLinks.length, "\nBroken: ").concat(broken.length);
  return clc.xterm(225)(resp); // const arrHref= arrObj.map((prop) => {
  //   return prop.href
  // });
  // const uniqueLinks=arrHref.filter((item,index,array)=>{
  //   //console.log(index)
  //    return array.indexOf(item) === index;
  // });
  // const broken =arrObj.filter((prop)=>{
  //     if(prop.status === 'Not Found' || prop.status === 'Fail'){
  //         prop.status
  //     } else if(prop.status >= 400){
  //         prop.status
  //     }
  //     return prop.status
  // })
  // const res =`Total: ${arrHref.length}\nUnique: ${uniqueLinks.length}\nBroken: ${broken.length}`
  // return clc.xterm(225)(res)
  //const res =[].concat(`Broken: ${broken.length}`)
  //return clc.xterm(225)(res)
  //return {total: arrHref.length,unicos: uniqueLinks.length,broken: broken.length}       
}; // optionLinks(ruta)
// .then(res=> console.log(statsValidate(res)))
//console.log(BrokenLink(ruta))
// BrokenLink(ruta)
// .then(res=>console.log(res))


exports.BrokenLink = BrokenLink;