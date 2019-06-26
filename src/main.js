
import  marked from 'marked';
import fetch from 'node-fetch';
const callsites = require('callsites')

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
                ruta:file
            });
        }
        marked(markLink, { renderer: renderer });
    })
    return links;
}

export const optionLinks =(ruta)=>{
    const arrProme = pathMdLinks(ruta).map((prop)=>{
        return fetch(prop.href)
        .then(res => {
            prop.status = res.status
            if(res.ok){
                prop.ok = 'ok'
             }else{
                prop.ok='fail'
             }
            return prop;
            })
        .catch(err => {
            prop.status = 500
            return prop;
        })     
    })
    return Promise.all(arrProme);
}















