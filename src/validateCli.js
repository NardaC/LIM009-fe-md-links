var clc = require("cli-color");

import{ pathMdLinks, optionLinks} from './main.js'
import{mdLinks} from './mdLinks.js'
import{readAllFiles} from './index.js'

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

export const brokenLink = (path) => {
  const arrHref = path.map((prop)=>{
    return prop.href
  })
  const uniqueLinks = path.filter((item,index,array)=>{
     return array.indexOf(item) === index;
  })
  const broken =path.filter((prop)=>{
        if(prop.status === 'Not Found' || prop.statusText === 'fail'){
            return prop.status
        } else if(prop.status >= 400){
            return prop.status
        }
    })
  const res =`Total: ${arrHref.length}\nUnique: ${uniqueLinks.length}\nBroken: ${broken.length}`
  return clc.xterm(206)(res)
  
}

