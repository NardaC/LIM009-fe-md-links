import {pathMdLinks, optionLinks} from "../src/main.js";

describe('funcion que valida los links',() => {
    it('deberia ser una funcion', () => {
        expect(typeof pathMdLinks).toBe('function');
    })
    it('deberia devolver un array de objetos con href, text y ruta', () => {
        expect(pathMdLinks('/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba')).toEqual([
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
          ]);
    })
});
describe('funcion que valida los links y agrega 2 propiedades al array de objetos',() => {
  it('deberia ser una funcion', () => {
      expect(typeof optionLinks).toBe('function');
  })
  it('deberia agregar las 2 propiedades statusText y status', () => {
    return optionLinks('/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba').then((res) =>{
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
});
  it('deberia ser una funcion', () => {
    return optionLinks('/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src').catch((err)=>{
      expect(err).toEqual([])
    })
})

})