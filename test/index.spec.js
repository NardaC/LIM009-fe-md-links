import { isPathAbsolute, isFile, isDirectory, readFile, readDir, isMd } from "../src/index.js";

describe('funcion que indica si la ruta es absoluta',() => {
    it('deberia ser una funcion',() => {
        expect(typeof isPathAbsolute).toBe('function');
     })
    it('deberia retornar true si la ruta es absoluta',() => {
        expect(isPathAbsolute('/Users/narda/Desktop/')).toBe('/Users/narda/Desktop/');
    })
    it('deberia retornar una ruta absoluta si es relativa',() => {
        expect(isPathAbsolute('index.js')).toBe('/Users/narda/Desktop/Lim009/LIM009-fe-md-links/index.js');
    })
});

describe('funcion que indica si es archivo',() => {
    it('deberia ser una funcion', () => {
        expect(typeof isFile).toBe('function');
    })
    it('deberia retornar true si es un archivo',() => {
        expect(isFile('src/index.js')).toBe(true);
    })
    it('deberia retornar false si no es un archivo',() => {
        expect(isFile('src/')).toBe(false);
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
        expect(isDirectory('src/')).toBe(true);
    })
    it('deberia retornar false si no es una carpeta',() => {
        expect(isDirectory('src/index.js')).toBe(false);
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
        expect(readFile('/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/holi.html')).toBe("console.log('holi');")
    })
})

describe('funcion que lee una carpeta',() => {
    it('deberia ser una funcion', () => {
        expect(typeof readDir).toBe('function');
    })
    it('deberia leer una carpeta y retornar el array', () => {
        expect(readDir('/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/')).toEqual([ "/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/holi.html", "/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/index.js","/Users/narda/Desktop/Lim009/LIM009-fe-md-links/src/main.js"])
    })
})

describe('funcion que reconoce si es markdown',() => {
    it('deberia ser una funcion', () => {
        expect(typeof isMd).toBe('function');
    })
    it('deberia retornar true si es markdown', () => {
        expect(isMd('holi.md')).toBe(true)
    })
    it('deberia retornar false si no es markdown', () => {
        expect(isMd('holi.js')).toBe(false)
    })
})