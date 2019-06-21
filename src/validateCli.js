import{ pathMdLinks, optionLinks} from './main.js'

const ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba'

export const stats = (path) => {
    const arrHref= pathMdLinks(path).map((prop) => {
        return prop.href
    });
    const uniqueLinks=arrHref.filter((item,index,array)=>{
        //console.log(index)
         return array.indexOf(item) === index;
         //console.log(array.indexOf(item))
    })
        return {
            total: arrHref.length,
            unicos: uniqueLinks.length
        }
}
//console.log(stats(ruta1)

export const statsValidate = (path) => {
    const arrHref= path.map((prop) => {
        return prop.href
    });
    const uniqueLinks=arrHref.filter((item,index,array)=>{
         return array.indexOf(item) === index;
    })
    const broken =path.filter((prop)=>{
        if(prop.status === 'Not Found' || prop.status === 'Fail'){
            return prop.status
        } else if(prop.status >= 400){
            return prop.status
        }
    }) 
    return {
        total: arrHref.length,
        unicos: uniqueLinks.length,
        broken: broken.length
    }
        
}
optionLinks(ruta1)
.then(res=> console.log(statsValidate(res)))
 

