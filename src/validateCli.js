var clc = require("cli-color");

import{ pathMdLinks, optionLinks} from './main.js'
import{mdLinks} from './mdLinks.js'
import{readAllFiles} from './index.js'


const ruta =[
  {
    href: 'https://www.youtube.com/',
    text: 'youtube',
    ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md',
    statusText: 'OK',
    status: 200
  },
  {
    href: 'https://www.google.com/',
    text: 'google',
    ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md',
    statusText: 'OK',
    status: 200
  },
  {
    href: 'https://peru.com/',
    text: 'peru',
    ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir12/file121.md',
    statusText: 'OK',
    status: 200
  },
  {
    href: 'https://perurrr.com/',
    text: 'peruroto',
    ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir12/file121.md',
    statusText: 'Fail',
    status: 'Not Found'
  },
  {
    href: 'https://github.com/Narda//-',
    text: 'youtuberoto',
    ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md',
    statusText: 'Not Found',
    status: 404
  },
  {
    href: 'https://www.googleR.com/',
    text: 'googleroto',
    ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md',
    statusText: 'Fail',
    status: 'Not Found'
  },
  {
    href: 'https://www.facebookR.com/',
    text: '',
    ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md',
    statusText: 'Fail',
    status: 'Not Found'
  },
  {
    href: 'https://www.facebook.com/',
    text: 'facebook',
    ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md',
    statusText: 'OK',
    status: 200
  }
]

export const stats = (path) => {
    const arrHref = path.map((prop)=>{
      return prop.href
    })
    const uniqueLinks = path.filter((item,index,array)=>{
      //console.log(index)
       return array.indexOf(item) === index;
       //console.log(array.indexOf(item))
    })
    const res =`Total: ${arrHref.length}\nUnique: ${uniqueLinks.length}`
    return clc.xterm(206)(res)
}
//console.log(stats(ruta));

export const brokenLink = (path) => {
  const arrHref = path.map((prop)=>{
    return prop.href
  })
  const uniqueLinks = path.filter((item,index,array)=>{
    //console.log(index)
     return array.indexOf(item) === index;
     //console.log(array.indexOf(item))
  })
  const broken =path.filter((prop)=>{
        if(prop.status === 'Not Found' || prop.statusText === 'fail'){
            return prop.status
        } else if(prop.status >= 400){
            return prop.status
        }
        //return prop.status
    })
  const res =`Total: ${arrHref.length}\nUnique: ${uniqueLinks.length}\nBroken: ${broken.length}`
  return clc.xterm(206)(res)
  
}
//console.log(brokenLink(ruta));

