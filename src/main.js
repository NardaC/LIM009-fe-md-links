const ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba'
const ruta2 ='index.js'

import {isPathAbsolute, readDir, readAllFiles,isFile, readFile} from './index.js'
export const pathMdLinks = (ruta) => {
    const absoPath =isPathAbsolute(ruta)
    let pathMd= readAllFiles(absoPath)
}
console.log(pathMdLinks(ruta2))