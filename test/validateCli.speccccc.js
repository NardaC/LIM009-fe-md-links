import mock from 'mock-fs'
import path from 'path'
import fetchMock from '../__mocks__/node-fetch.js'
import {stats, brokenLink} from '../src/validateCli.js'
import {mdLinksCli} from '../src/mdLinksCli.js'
import { isTaggedTemplateExpression } from '@babel/types';

// const arrObj =[
//   path.join(process.cwd(),'prueba', 'dir11', 'README.md'), 
//   path.join(process.cwd(),'prueba', 'dir12', 'markdown.md'), 
//   path.join(process.cwd(),'prueba', 'prueba.md')
// ]
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
                    'markdown.md':`[peru](https://peru.com/) [peruroto](https://perurrr.com/)`,
                },
                'prueba.md': `[youtuberoto](https://github.com/Narda//-)`,
                'holi.html':'holaaa'
            }
        })
    })
    afterAll(mock.restore)

// const arrRoute =
//     [
//     {
//       href: 'https://www.youtube.com/',
//       text: 'youtube',
//       ruta: path.join(process.cwd(),'prueba', 'dir11', 'README.md'),
//       ok: 'ok',
//       status: 200
//     },
//     {
//       href: 'https://www.google.com/',
//       text: 'google',
//       ruta: path.join(process.cwd(),'prueba','dir11', 'README.md'),
//       ok: 'ok',
//       status: 200
//     },
//     {
//       href: 'https://peru.com/',
//       text: 'peru',
//       ruta: path.join(process.cwd(),'prueba','dir12', 'markdown.md'),
//       ok: 'ok',
//       status: 200
//     },
//     {
//       href: 'https://peru.com/-/',
//       text: 'peruroto',
//       ruta: path.join(process.cwd(),'prueba', 'dir12', 'markdown.md'),
//       ok: "fail",
//       status: 404
//     },
//     {
//       href: 'https://github.com/Narda//-',
//       text: 'youtuberoto',
//       ruta: path.join(process.cwd(),'prueba','prueba.md'),
//       ok: 'fail',
//       status: 404
//     } 
//   ];

  const totalUnique =`
  Total: 5\n
  Unique: 5`
  const broken = `
  Total: 5 \n
  Unique: 5 \n
  Broken: 2`

  describe('stats', () => {
    it('deberia ser una funcion', () => {
        expect(typeof mdLinksCli).toBe('function');
    });
    it('deberia devolver link totales y unicos',(done) =>{
        mdLinksCli(path.join(process.cwd(),'prueba','dir11', 'README.md'),['--stats'])
        .then((res)=>{
            expect(res).toEqual(`Total:1 Unique: 1`)
            done()
        })
        
    })
  })