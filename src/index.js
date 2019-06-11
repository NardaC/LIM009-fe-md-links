const path = require('path');
const ruta3 = '‎⁨/Users/narda/Desktop/';
let ruta2 = 'index.js';

const isPathAbsolute = (ruta) => {
    let absolute = path.isAbsolute(ruta);
    if(absolute){
        return absolute;
        //console.log("es absoluta");
    } else {
        return path.resolve(ruta);
        //console.log("no es absoluta");
    }
    //return absolute
}

module.exports = {
    isPathAbsolute
}

console.log(isPathAbsolute(ruta2));