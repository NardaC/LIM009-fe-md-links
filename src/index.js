import path from 'path';
import  fs from 'fs';
//const fspromises = require('fs.promises')

const ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src'
const ruta3 = '‎⁨/Users/narda/Desktop/';
let ruta2 = 'index.js';

export const isPathAbsolute = (ruta) => {
    let absolute = path.isAbsolute(ruta);
    if(absolute){
        return absolute;
    } else {
        return path.resolve(ruta);
    }
    //return absolute
}

// function filePathExists(filePath) {
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

export const isFile = (ruta)=>{
    const stats = fs.statSync(ruta);
    return stats.isFile();
}
//console.log(isFile('holi'));


export const isDirectory = (ruta)=>{
    const stats = fs.statSync(ruta);
    return stats.isDirectory()
}
 //console.log(isFile(ruta2));
// console.log(isDirectory(ruta2));
// console.log(isDirectory(ruta1));

export const readFile =(ruta) =>{
    let archivo = fs.readFileSync(ruta, 'utf-8');
    return archivo
}
//console.log(readFile(ruta2));

export const readDir =(ruta) =>{
    let carpeta = fs.readdirSync(ruta, 'utf-8');
    return carpeta
}
//console.log(readDir(ruta1));

export const isMd = (str) => {
    let md = path.extname(str) === '.md'
    return md
}
//console.log(isMd('prueba.md'));
