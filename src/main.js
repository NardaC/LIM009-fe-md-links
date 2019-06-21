
import  marked from 'marked';
import fetch from 'node-fetch';
const ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba'
const ruta2 ='index.js'
const ruta3 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md'
const ruta4 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src'

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

export const optionLinks =(ruta)=>{
    const arrProme = pathMdLinks(ruta).map((prop)=>{//console.log(prop.href)
        return fetch(prop.href)
        .then(res => {
            if(res.status<= 399 || res.status < 600){
                prop.statusText = res.statusText
                prop.status = res.status
             }
            return prop;
            })
        .catch(err => {
            prop.statusText = "Fail"
            //prop.status =err.code
            prop.status = "Not Found"
            
            return prop;
        })     
    })
    return Promise.all(arrProme);
}
//console.log(optionLinks(ruta1))
optionLinks(ruta1)
.then( res => console.log(res))
.catch(err => console.log(err))














