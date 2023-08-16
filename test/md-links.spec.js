const mdLinks = require('../index.js');
const validate = require('../cli.js');
const { isAnMdFile } = require('../functions.js');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('El archivo no existe');
  });
  
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

  it("return true if it is absolute", () => {
    expect(isAnMdFile(
    "C:\\Users\\Shanty\\Desktop\\Laboratoria\\mdLinks\\DEV007-md-links\\prueba1.md")).toBe(true);
  });

  it("return false if is not absolute", () => {
    expect(isAnMdFile("prueba1.md")).toBe(true);
  });

  it("isAnMdFile si es una funcion siquesi", () => {
    expect(typeof isAnMdFile).toBe ("function");
  });
})

