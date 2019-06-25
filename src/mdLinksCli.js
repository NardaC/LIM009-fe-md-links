#! / usr / bin / env nodo
var clc = require("cli-color");

import { stats, brokenLink} from './validateCli.js'
import {mdLinks} from './mdLinks.js'
import {readAllFiles} from './main.js'

const path = process.argv[2]
let option1 = process.argv[3]
let option2 =process.argv[4]

export const mdLinksCli =(path, opt1, opt2) => {
        return mdLinks(path,{validate:true})
        .then((res)=>{
            if(res.length === 0){
                return clc.xterm(196)('esta ruta no contiene archivos md')          
            }else if(path && !opt1 && !opt2){
                let newArr =res.map((prop)=>{
                    return `${prop.ruta} ${prop.href} ${prop.text}` 
                })
                return clc.xterm(37)(newArr.toString().replace(/,/g,'\n'))
            }else if(path && opt1 ==='--validate' && !opt2){
                let newArr =res.map((prop)=>{
                    return `${prop.ruta} ${prop.href} ${prop.text} ${prop.statusText} ${prop.status}`
                })
                return clc.xterm(116)(newArr.toString().replace(/,/g,'\n'))
            }else if (path && opt1 ==='--stats' && !opt2){
                return stats(res);
            }else if (path && opt1 ==='--validate' && opt2 ==='--stats'){
                return(brokenLink(res))
            }
        })
        .catch((err)=>{
            return clc.xterm(196)(err)
        })
}
//console.log(mdLinksCli(ruta1, option1 ,option2))

mdLinksCli(path,option1,option2)
.then(res => console.log(res))
.catch(err=> console.log(err))

