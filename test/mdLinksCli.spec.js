import mock from 'mock-fs'
import path from 'path'
import fetchMock from '../__mocks__/node-fetch.js'

import{mdLinksCli} from '../src/mdLinksCli.js'
import {mdLinks} from '../src/mdLinks.js'
import{stats, brokenLink} from '../src/validateCli.js'
//import { doesNotReject } from 'assert';

fetchMock
  .mock('https://www.youtube.com/', 200,)
  .mock('https://www.google.com/', 200,)
  .mock('https://peru.com/', 200, )
  .mock('https://peru.com/-/', 404)
  .mock('https://github.com/Narda//-', 404)
    
beforeAll(()=>{
  mock({
      '/prueba':{
          'dir11':{
              'app.js': '',
              'README.md': `[youtube](https://www.youtube.com/) [google](https://www.google.com/)`,
          },
          'dir12':{
              'markdown.md':`[peru](https://peru.com/) [peruroto](https://peru.com/-/)`,
          },
          'prueba.md': `[youtuberoto](https://github.com/Narda//-)`,
          'holi.html':'holaaa',
          'dir123':{
            'app.js': '',
            "holi.css": ''
          },
      }
  })
})

afterAll(mock.restore)
const arrOb =`/prueba/dir11/README.md https://www.youtube.com/ youtube
/prueba/dir11/README.md https://www.google.com/ google
/prueba/dir12/markdown.md https://peru.com/ peru
/prueba/dir12/markdown.md https://peru.com/-/ peruroto
/prueba/prueba.md https://github.com/Narda//- youtuberoto`

const arrMorProp =
`/prueba/dir11/README.md https://www.youtube.com/ youtube undefined 200
/prueba/dir11/README.md https://www.google.com/ google undefined 200
/prueba/dir12/markdown.md https://peru.com/ peru undefined 200
/prueba/dir12/markdown.md https://peru.com/-/ peruroto undefined 404
/prueba/prueba.md https://github.com/Narda//- youtuberoto undefined 404`

const totalUnique =`Total: 5\nUnique: 5`
const broken = `Total: 5\nUnique: 5\nBroken: 2`

describe('mdLinksCli',()=>{
    it('deberia ser una funcion', () => {
        expect(typeof mdLinksCli).toBe('function');
    });
    it('deberia devolver las 3 propiedades', (done) => {
        mdLinksCli('/prueba').then((res)=>{
            expect(res).toEqual(arrOb)
            done()
        })
    });
    it('deberia devolver las 5', (done) => {
        return mdLinksCli('/prueba','--validate').then((res)=>{
            expect(res).toEqual(arrMorProp)
            done()
        })
    });
    it('deberia devolver los link totales unicos', (done) => {
      return mdLinksCli('/prueba','--stats').then((res)=>{
          expect(res).toEqual(totalUnique)
          done()
      })
    });
    it('deberia devolver los link totales unicos', (done) => {
      return mdLinksCli('/prueba','--validate','--stats').then((res)=>{
          expect(res).toEqual(broken)
          done()
      })
    });
    it('deberia devolver un mensaje que la ruta no contiene archivos md', (done) => {
      return mdLinksCli('/prueba/dir123','--validate','--stats').then((res)=>{
          expect(res).toEqual(`esta ruta no contiene archivos md`)
          done()
      })
    });
    it('deberia devolver un mensaje que la ruta no contiene archivos md', (done) => {
      
      mdLinksCli('/prueba/marjori','--validate','--stats').catch((err)=>{
          expect(err).toBe(`ruta invalida`)
          done()
      })
    })
})
