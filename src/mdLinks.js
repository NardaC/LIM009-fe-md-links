import {pathMdLinks, optionLinks} from './main.js'
import {readAllFiles} from './index.js'
import { promises } from 'fs';
const clc = require("cli-color");

export const mdLinks = (path, opts) => {
    
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
                reject(clc.xterm(196)('ruta invalida'))
            }else{
                reject(pathMdLinks(path))
            }
        }
    })
};


