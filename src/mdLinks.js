import {pathMdLinks, optionLinks} from './main.js'
import {readAllFiles} from './index.js'
import { promises } from 'fs';

const ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba'
// const ruta3 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.html'
const ruta2 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src'


// const mdLinks = (path, opts) => {
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
const mdLinks = (path, opts) => {
    return new Promise ((resolve, reject) => {
        try{
            if(opts.validate === true){
                resolve(optionLinks(path));
            } else if (!opts || opts.validate ===false){
                resolve(pathMdLinks(path));
            }   
        }
        catch(err){
            if(err.code === 'ENOENT'){
                reject( 'ruta invalida')
            }else{
                reject( pathMdLinks(path))
            }
        }
    })
};

// mdLinks(ruta1, {validate:true})
// .then(res => console.log(res))
// .catch(err => console.log(err))

// mdLinks(ruta1, {validate:false})
// .then(res => console.log(res))
// .catch(err => console.log(err))

// mdLinks(ruta2)
// .then(res => console.log(res))
// .catch(err => console.log(err))


