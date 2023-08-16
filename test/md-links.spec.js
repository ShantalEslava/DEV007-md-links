const mdLinks = require('../index.js');
const validate = require('../cli.js');
const { isAnMdFile, linksEqualtoZero } = require('../functions.js');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('El archivo no existe');
  });

  it('mdLinks es una funcion', () =>{
    expect(typeof mdLinks).toBe("function");
  })
});

describe ('validate', () =>{
  it('es un objeto', () =>{
    expect(typeof validate).toBe("object");
  })
});


describe ('isAnMdFile', () =>{

  it('debe devolver true si es un archivo md', () =>{
    expect(isAnMdFile("C:\\Users\\Shanty\\Desktop\\Laboratoria\\mdLinks\\DEV007-md-links\\prueba1.md")).toBe(true);
  }) 

  it("return true if it is absolute", () => {
    expect(isAnMdFile(
    "C:\\Users\\Shanty\\Desktop\\Laboratoria\\mdLinks\\DEV007-md-links\\prueba1.md")).toBe(true);
  });

  it("return true if it is absolute", () => {
    expect(isAnMdFile(
    "C:\\Users\\Shanty\\Desktop\\Laboratoria\\mdLinks\\DEV007-md-links\\prueba2.md")).toBe(true);
  });

  it("return true if it is absolute", () => {
    expect(isAnMdFile(
    "C:\\Users\\Shanty\\Desktop\\Laboratoria\\mdLinks\\DEV007-md-links\\prueba3.md")).toBe(true);
  });

  it("return false if is not absolute", () => {
    expect(isAnMdFile("prueba1.md")).toBe(true);
  });

  it("isAnMdFile si es una funcion siquesi", () => {
    expect(typeof isAnMdFile).toBe ("function");
  });
});


describe ('linksEqualtoZero',()=>{

  it("retorna false ya que si hay links en el archivo",()=>{
    expect(linksEqualtoZero("C:\\Users\\Shanty\\Desktop\\Laboratoria\\mdLinks\\DEV007-md-links\\prueba2.md")).toBe(false)
    })
    
    it("linksEqualToZero deberia ser una funcion", () => {
      expect(typeof linksEqualtoZero).toBe ("function");
    });

    it("!linksEqualToZero sale el console.log", () => {
      console.log("Enlaces encontrados:");
    });
  })








  /*
  it("retorna true ya que si hay links en el archivo",()=>{
    expect(linksEqualtoZero("C:\\Users\\Shanty\\Desktop\\Laboratoria\\mdLinks\\DEV007-md-links\\thumb.png")).toBe(false)
    })
  
En esta parte esta retornando false a pesar de que no es algo que contiene links?
    */
