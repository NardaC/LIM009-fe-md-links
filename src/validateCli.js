var clc = require("cli-color");

import{ pathMdLinks, optionLinks} from './main.js'

const ruta = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba';

export const stats = (path) => {
    const arrHref= optionLinks(path)
    .then((res)=>{
      res.map((prop) => {
        return prop.href 
      });
    })
    const uniqueLinks=optionLinks(path)
    .then((res)=>{
      res.filter((item,index,array)=>{
        //console.log(index)
         return array.indexOf(item) === index;
         //console.log(array.indexOf(item))
      })
    })
    const res =`Total: ${arrHref.length}\nUnique: ${uniqueLinks.length}`
    return clc.xterm(206)(res)
    //return ({total: arrHref.length,unicos: uniqueLinks.length})
}
//console.log(stats(ruta))

export const BrokenLink = (path) => {
    const arrHref= optionLinks(path)
    .then((res)=>{
      res.map((prop) => {
        return prop.href 
      });
    })
    const uniqueLinks=optionLinks(path)
    .then((res)=>{
      res.filter((item,index,array)=>{
      //console.log(index)
        return array.indexOf(item) === index;
       //console.log(array.indexOf(item))
      })
    });
    const broken =optionLinks(path)
    .then((res)=>{
      res.filter((prop)=>{
        if(prop.status === 'Not Found' || prop.status === 'Fail'){
            prop.status
        } else if(prop.status >= 400){
            prop.status
        }
        return prop.status
      })
    })
    const resp =`Total: ${arrHref.length}\nUnique: ${uniqueLinks.length}\nBroken: ${broken.length}`
    return clc.xterm(225)(resp)

    // const arrHref= arrObj.map((prop) => {
    //   return prop.href
    // });
    // const uniqueLinks=arrHref.filter((item,index,array)=>{
    //   //console.log(index)
    //    return array.indexOf(item) === index;
    // });
    // const broken =arrObj.filter((prop)=>{
    //     if(prop.status === 'Not Found' || prop.status === 'Fail'){
    //         prop.status
    //     } else if(prop.status >= 400){
    //         prop.status
    //     }
    //     return prop.status
    // })
    // const res =`Total: ${arrHref.length}\nUnique: ${uniqueLinks.length}\nBroken: ${broken.length}`
    // return clc.xterm(225)(res)
    //const res =[].concat(`Broken: ${broken.length}`)
    //return clc.xterm(225)(res)
    //return {total: arrHref.length,unicos: uniqueLinks.length,broken: broken.length}       
}
// optionLinks(ruta)
// .then(res=> console.log(statsValidate(res)))
//console.log(BrokenLink(ruta))
// BrokenLink(ruta)
// .then(res=>console.log(res))

