const { isPathAbsolute } = require("../lib/index.js");

describe('funcion que indica si la ruta es absoluta',() => {
    it('deberia ser una funcion',() => {
        expect(typeof isPathAbsolute).toBe('function');
     })
    it('deberia retornar true si la ruta es absoluta',() => {
        expect(isPathAbsolute('/Users/narda/Desktop/')).toBe(true);
    })
    it('deberia retornar una ruta absoluta si es relativa',() => {
        expect(isPathAbsolute('index.js')).toBe('/Users/narda/Desktop/Lim009/LIM009-fe-md-links/index.js');
    })
})