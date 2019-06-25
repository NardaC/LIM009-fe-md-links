import mock from 'mock-fs'
import path from 'path'
import fetchMock from '../__mocks__/node-fetch.js'
import{ mdLinks } from '../src/mdLinks.js'
import{optionLinks,  pathMdLinks} from '../src/main.js'

fetchMock
    .mock('https://www.youtube.com/', 200,)
    .mock('https://www.google.com/', 200,)
    .mock('https://peru.com/', 200, )
    .mock('https://peru.com/-/', 404)
    .mock('https://github.com/Narda//-', 404)


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

describe('mdLinks, opts',() => {
  beforeEach(()=> {
    fetchMock.reset()
  });
    it('deberia ser una funcion', () => {
        expect(typeof mdLinks).toBe('function');
    });
    it('deberia devolver las 5 propiedades validate es true', () => {
        return mdLinks(path.join(process.cwd(),'prueba'),{validate:true}).then((res) => {
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
    });
    it('mdLinks', () => {
        return mdLinks(path.join(process.cwd(),'prueba'),{validate:false}).then((res) => {
            expect(res).toEqual([
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
 
    it('deberia devolver la ruta no contiene archivos md, si la ruta ingresada no tiene archivos md',()=>{
        return mdLinks(path.join(process.cwd(),'src')).then((res) => {
            expect(res).toBe([])
        })
    });
    it('deberia devolver ruta invalida si la ruta ingresada no existe', () => {
        return mdLinks(path.join(process.cwd(),'hola.js')).catch((err) => {
            expect(err).toBe('ruta invalida')
        })
    })
})
})