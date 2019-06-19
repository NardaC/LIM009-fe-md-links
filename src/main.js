
import  marked from 'marked';
import fetch from 'node-fetch';
const ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba'
const ruta2 ='index.js'
const ruta3 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md'

import {isPathAbsolute, readAllFiles, readFile} from './index.js'

export const pathMdLinks = (ruta) => {
    const absoPath =isPathAbsolute(ruta);
    let pathMd = readAllFiles(absoPath);
    let links =[];
    pathMd.map((file)=>{
        let markLink=readFile(file);
        const renderer = new marked.Renderer(markLink);
        renderer.link= (href, title, text) => {
            links.push({
                href:href,
                text:text,
                ruta: file
            });
        }
        marked(markLink, { renderer: renderer });
        
    })
    return links;
    //console.log(marked(pathMd));
}
//console.log(pathMdLinks(ruta1))













