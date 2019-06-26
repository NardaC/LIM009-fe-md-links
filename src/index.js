import  path from 'path';
import  fs from 'fs';

export const isPathAbsolute = (ruta) => {
    let absolute = path.isAbsolute(ruta);
    if(absolute){
        return ruta;
    } else {
        return path.resolve(ruta);
    }
}

export const isFile = (ruta)=>{
    const stats = fs.statSync(ruta);
    return stats.isFile();
}

export const isDirectory = (ruta)=>{
    const stats = fs.statSync(ruta);
    return stats.isDirectory()
}

export const readFile =(ruta) =>{
    let archivo = fs.readFileSync(ruta, 'utf-8');
    return archivo
}

export const readDir =(ruta) =>{
    let arrCarpeta = fs.readdirSync(ruta, 'utf-8');
    return arrCarpeta.map((element) => {
        return  path.join(ruta , element)
    })
}

export const isMd = (str) => {
     let md = path.extname(str) === '.md'
     return md
}

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

