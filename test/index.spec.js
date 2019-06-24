import mock from 'mock-fs'
import path from 'path'
import { isPathAbsolute, isFile, isDirectory, readFile, readDir, isMd, readAllFiles } from "../src/index.js";

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
            'prueba.md': `[youtuberoto](https://github.com/Narda//-) `,
            'holi.html':'holaaa'
        }
    })
})
afterAll(mock.restore)

describe('funcion que indica si la ruta es absoluta',() => {
    it('deberia ser una funcion',() => {
        expect(typeof isPathAbsolute).toBe('function');
     })
    it('deberia retornar la ruta es absoluta',() => {
        expect(isPathAbsolute(path.join(process.cwd(), 'README.md'))).toBe(path.join(process.cwd(), 'README.md'));
    })
    it('deberia retornar una ruta absoluta si es relativa',() => {
        expect(isPathAbsolute('README.md')).toBe(path.join(process.cwd(), 'README.md'));
    })
});

describe('funcion que indica si es archivo',() => {
    it('deberia ser una funcion', () => {
        expect(typeof isFile).toBe('function');
    })
    it('deberia retornar true si es un archivo',() => {
        expect(isFile(path.join(process.cwd(),'index.js'))).toBe(true);
    })
    it('deberia retornar false si no es un archivo',() => {
        expect(isFile(path.join(process.cwd(),'src'))).toBe(false);
    })
    it('deberia fallar si la ruta no existe',() => {
        try {
            isFile('holi')
        } catch(err) {
            expect(err.code).toBe('ENOENT');
        }        
    })
})

describe('funcion que indica si es una carpeta',() => {
    it('deberia ser una funcion', () => {
        expect(typeof isDirectory).toBe('function');
    })
    it('deberia retornar true si es una carpeta',() => {
        expect(isDirectory(path.join(process.cwd(), 'dir11'))).toBe(true);
    })
    it('deberia retornar false si no es una carpeta',() => {
        expect(isDirectory(path.join(process.cwd(), 'app.js'))).toBe(false);
    })
    it('deberia fallar si la carpeta no existe',() => {
        try {
            isDirectory('holi')
        } catch(err) {
            expect(err.code).toBe('ENOENT');
        }        
    })
})

describe('funcion que lee el archivo',() => {
    it('deberia ser una funcion', () => {
        expect(typeof readFile).toBe('function');
    })
    it('deberia leer un archivo', () => {
        expect(readFile(path.join(process.cwd(),'holi.html'))).toBe('holaaa')
    })
})

describe('funcion que lee una carpeta',() => {
    it('deberia ser una funcion', () => {
        expect(typeof readDir).toBe('function');
    })
    it('deberia leer una carpeta y retornar el array', () => {
        expect(readDir('prueba')).toEqual([ "/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/holi.html", "/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/index.js","/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/main.js","/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/mdLinks.js","/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/mdLinksCli.js", "/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/validateCli.js"])
    })
})

describe('funcion que reconoce si es markdown',() => {
    it('deberia ser una funcion', () => {
        expect(typeof isMd).toBe('function');
    })
    it('deberia retornar true si es markdown', () => {
        expect(isMd(path.join(process.cwd(),'markdown.md'))).toBe(true)
    })
    it('deberia retornar false si no es markdown', () => {
        expect(isMd(path.join(process.cwd(),'app.js'))).toBe(false)
    })
})

describe('funcion que lee el directorio, valida los md',() => {
    it('deberia ser una funcion', () => {
        expect(typeof readAllFiles).toBe('function');
    })
    it('deberia retornar los archivos md en un array', () => {
        expect(readAllFiles('/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba')).toEqual([
            '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir11/file112.md',
            '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir1/dir12/file121.md',
            '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/dir3/file32.md',
            '/Users/narda/Desktop/Lim009/LIM009-fe-md-links/prueba/file4.md'
          ])
    })
    // it('deberia retornar false si no es markdown', () => {
    //     expect(isMd('holi.js')).toBe(false)
    // })
})