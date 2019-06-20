import{ mdLinks } from '../src/mdLinks.js'

const ruta1 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba'
const ruta2 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src'
const ruta3 = '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/preguntameParaAyudarte.js'

describe('funcion que devuelve una promesa y resuelve un array de objetos',() => {
    it('deberia ser una funcion', () => {
        expect(typeof mdLinks).toBe('function');
    })
    it('deberia devolver las 5 propiedades validate es true', () => {
        return mdLinks(ruta1,{validate:true}).then((res) =>{
            expect(res).toEqual([
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
              ])
        })
    })
    it('deberia devolver las 3 propiedades si validate es falso o no tiene validate', () => {
        return mdLinks(ruta1).then((res) => {
            expect(res).toEqual([
                {
                  href: 'https://www.youtube.com/',
                  text: 'youtube',
                  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md'
                },
                {
                  href: 'https://www.google.com/',
                  text: 'google',
                  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md'
                },
                {
                  href: 'https://peru.com/',
                  text: 'peru',
                  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir12/file121.md'
                },
                {
                  href: 'https://perurrr.com/',
                  text: 'peruroto',
                  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir12/file121.md'
                },
                {
                  href: 'https://github.com/Narda//-',
                  text: 'youtuberoto',
                  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md'
                },
                {
                  href: 'https://www.googleR.com/',
                  text: 'googleroto',
                  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md'
                },
                {
                  href: 'https://www.facebookR.com/',
                  text: '',
                  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md'
                },
                {
                  href: 'https://www.facebook.com/',
                  text: 'facebook',
                  ruta: '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md'
                }
              ])
        })

    })
    it('deberia devolver la ruta no contiene archivos md, si la ruta ingresada no tiene archivos md',()=>{
        return mdLinks(ruta2).then((res) => {
            expect(res).toBe('esta ruta no contiene archivos md')
        })
    })
    it('deberia devolver ruta invalida si la ruta ingresada no existe', () => {
        return mdLinks(ruta3).catch((err) => {
            expect(err).toBe('ruta invalida')
        })
    })
})