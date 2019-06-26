
import mock from 'mock-fs'
import path from 'path'
import fetchMock from '../__mocks__/node-fetch.js'
import {stats, brokenLink} from '../src/validateCli.js'
import {mdLinksCli} from '../src/mdLinksCli.js'
import { isTaggedTemplateExpression } from '@babel/types';
const clc = require("cli-color");

// const arrObj =[
//   path.join('/prueba', 'dir11', 'README.md'), 
//   path.join('/prueba', 'dir12', 'markdown.md'), 
//   path.join('/prueba', 'prueba.md')
// ]

const arrRoute =
    [
    {
      href: 'https://www.youtube.com/',
      text: 'youtube',
      ruta: path.join('/prueba', 'dir11', 'README.md'),
      ok: 'ok',
      status: 200
    },
    {
      href: 'https://www.google.com/',
      text: 'google',
      ruta: path.join('/prueba','dir11', 'README.md'),
      ok: 'ok',
      status: 200
    },
    {
      href: 'https://peru.com/',
      text: 'peru',
      ruta: path.join('/prueba','dir12', 'markdown.md'),
      ok: 'ok',
      status: 200
    },
    {
      href: 'https://peru.com/-/',
      text: 'peruroto',
      ruta: path.join('/prueba', 'dir12', 'markdown.md'),
      ok: "fail",
      status: 404
    },
    {
      href: 'https://github.com/Narda//-',
      text: 'youtuberoto',
      ruta: path.join('/prueba','prueba.md'),
      ok: 'fail',
      status: 404
    } 
  ];

  const totalUnique =`Total: 5\nUnique: 5`
  const broken = `Total: 5\nUnique: 5\nBroken: 2`

describe('stats', () => {
    it('deberia ser una funcion', () => {
        expect(typeof stats).toBe('function');
    });
    it('deberia devolver los links totales y unicos', () => {
        expect(stats(arrRoute)).toEqual(clc.xterm(206)(totalUnique));
  })
})
describe('brokenLink', () =>{
    it('deberia devolver los lin totales, unico y rotos',()=>{
        expect(brokenLink(arrRoute)).toEqual(clc.xterm(206)(broken))
    })

})