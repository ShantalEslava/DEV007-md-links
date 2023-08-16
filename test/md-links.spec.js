const mdLinks = require('../index.js');
const validate = require('../cli.js');
const { isAnMdFile } = require('../functions.js');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('El archivo no existe');
  });
});

describe ('mdLinks', () =>{
  it('es una funcion', () =>{
    expect(typeof mdLinks).toBe("function");
  })

});

describe ('validate', () =>{
  it('es un objeto', () =>{
    expect(typeof validate).toBe("object");
  })

  //------
});
describe ('isAnMdFile', () =>{
  it('debe devolver true si es un archivo md', () =>{
    expect(isAnMdFile("C:\\Users\\Shanty\\Desktop\\Laboratoria\\mdLinks\\DEV007-md-links\\prueba1.md")).toBe(true);
  }) 

});


