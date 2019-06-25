import mock from 'mock-fs'
import path from 'path'
import fetchMock from '../__mocks__/node-fetch.js'
//const callsites = require('callsites')

import {pathMdLinks, optionLinks} from "../src/main.js";

fetchMock
    .mock('https://www.youtube.com/', 200)
    .mock('https://www.google.com/', 200)
    .mock('https://peru.com/', 200)
    .mock('https://peru.com/-/', 404)
    .mock('https://github.com/Narda//-', 404)

    fetchMock.config.sendAsJson = false;
beforeAll(()=>{
  mock({
      'prueba':{
          'dir11':{
              'app.js': '',
              'README.md': `[youtube](https://www.youtube.com/) [google](https://www.google.com/)`,
          },
          'dir12':{
              'markdown.md':`[peru](https://peru.com/) [peruroto](https://peru.com/-/)`,
          },
          'prueba.md': `[youtuberoto](https://github.com/Narda//-)`,
          'holi.html':'holaaa'
      }
  })
})

afterAll(mock.restore)

describe('funcion que valida los links',() => {
    it('deberia ser una funcion', () => {
        expect(typeof pathMdLinks).toBe('function');
    })
    it('deberia devolver un array de objetos con href, text y ruta', () => {
        expect(pathMdLinks(path.join(process.cwd(),'prueba'))).toEqual([
            {
              href: 'https://www.youtube.com/',
              text: 'youtube',
              ruta: path.join(process.cwd(),'prueba', 'dir11', 'README.md')
            },
            {
              href: 'https://www.google.com/',
              text: 'google',
              ruta: path.join(process.cwd(),'prueba','dir11', 'README.md')
            },
            {
              href: 'https://peru.com/',
              text: 'peru',
              ruta: path.join(process.cwd(),'prueba', 'dir12', 'markdown.md')
            },
            {
              href: 'https://peru.com/-/',
              text: 'peruroto',
              ruta: path.join(process.cwd(),'prueba','dir12', 'markdown.md')
            },
            {
              href: 'https://github.com/Narda//-',
              text: 'youtuberoto',
              ruta: path.join(process.cwd(),'prueba','prueba.md')
            }
          ]);
    })
});

describe('funcion que valida los links y agrega 2 propiedades al array de objetos',() => {
  
  it('deberia ser una funcion', () => {
      expect(typeof optionLinks).toBe('function');
  })
  //fetchMock.config.fallbackToNetwork = true;
  it('deberia agregar las 2 propiedades statusText y status', () => {
    return optionLinks(path.join(process.cwd(),'prueba')).then((res) =>{
      expect(res).toEqual([
        {
          href: 'https://www.youtube.com/',
          text: 'youtube',
          ruta: path.join(process.cwd(),'prueba', 'dir11', 'README.md'),
          ok: 'ok',
          status: 200
        },
        {
          href: 'https://www.google.com/',
          text: 'google',
          ruta: path.join(process.cwd(),'prueba','dir11', 'README.md'),
          ok: 'ok',
          status: 200
        },
        {
          href: 'https://peru.com/',
          text: 'peru',
          ruta: path.join(process.cwd(),'prueba','dir12', 'markdown.md'),
          ok: 'ok',
          status: 200
        },
        {
          href: 'https://peru.com/-/',
          text: 'peruroto',
          ruta: path.join(process.cwd(),'prueba', 'dir12', 'markdown.md'),
          ok: "fail",
          status: 404
        },
        
        {
          href: 'https://github.com/Narda//-',
          text: 'youtuberoto',
          ruta: path.join(process.cwd(),'prueba','prueba.md'),
          ok: 'fail',
          status: 404
        }
      ])
    })
})
})

// describe('validateUrl', () =>{
  // beforeEach(()=> {
  //   fetchMock.reset()
  //   fetchMock.resetBehavior()
  // })
// //fetchMock.config.fallbackToNetwork = true;

//   it('deberia devoolver status ok', ()=>{
//     fetchMock.mock('nnnnn', 500)
//     expect(validateUrl([{href: 'nnnnn'}])).toHaveProperty([{'status': 500}])
//   })
// })