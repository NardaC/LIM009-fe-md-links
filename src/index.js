import  path from 'path';
import  fs from 'fs';
// const path =require('path');
// const fs =require('fs');
//const fspromises = require('fs.promises')

const ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src'
const ruta3 = '‎⁨/Users/narda/Desktop/';
let ruta2 = 'index.js';
const ruta4 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/index.js'
const ruta5 ='/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba'

export const isPathAbsolute = (ruta) => {
    let absolute = path.isAbsolute(ruta);
    if(absolute){
        return ruta;
    } else {
        return path.resolve(ruta);
    }
    //return absolute
}
//console.log(path.isAbsolute(ruta4));

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
//console.log(readFile(ruta4));

export const readDir =(ruta) =>{
    let arrCarpeta = fs.readdirSync(ruta, 'utf-8');
    return arrCarpeta.map((element) => {
        return  path.join(ruta , element)
    })
}
//console.log(readDir(ruta5));

export const isMd = (str) => {
     let md = path.extname(str) === '.md'
     return md
}
//console.log(isMd('prueba.md'));

export const readAllFiles = (ruta) =>{
    let arr =[];    
    if (isFile(ruta)) {
        if(isMd(ruta)){
            arr.push(ruta)
        }
    } else { // es directorio o archivo no md
        let dir =fs.readdirSync(ruta)
        dir.forEach((hijo) => {
            const arrNew = readAllFiles(path.join(ruta, hijo))
            arr = arr.concat(arrNew);
        });     
    }
    return arr ;  
}
//console.log(readAllFiles(ruta5));
