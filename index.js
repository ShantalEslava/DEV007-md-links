//importamos bibliotecas
const axios = require('axios')
const path = require('path');
const fs = require('fs');
const functions = require('./functions.js');
const { isTypedArray } = require('util/types');


const mdLinks = (route) => {
  return new Promise((resolve, reject) => {



//console.log(route)
const relativePath = route
  //esto ya esta en test (1)
  if (!fs.existsSync(relativePath)) {
    console.log("El archivo no existe.");
    return; //ayer se me había roto todo porque me faltaba este return    D,:

  }

  const userPath = path.resolve(relativePath); //Solo convierte a ruta absoluta sin verificar si era o no ya que si si era no afecta en nada y si no  cumple con el proceso
  //console.log("userpath",userPath)
  //esto ya lo meti a test (2) (podria hacer uno que de true y otro que de false)
  if (functions.isAnMdFile(userPath)) { //Vemos si es un archivo md o nopi
    console.log("El archivo es un archivo Markdown (.md).");
  } else {
    console.error("El archivo no es un archivo Markdown válido.");
    return;
  }

  fs.readFile(userPath, 'utf8', (err, data) => { //entramos al archivo, aun no es un test(3)
    if (err) {
      console.error(err);
      return;
    } else {
      // Usamos una regex para encontrar los links
      const findLinksMd = /\[([^\]]+)\]\(([^)]+)\)/g;
      const links = [];

      data.replace(findLinksMd, (match, text, url) => {
        links.push({ text, url });
      });
//(4)esto ya lo intente meter a test, esta actalmente solo en functions pero me parece que hay que corregir porque algo no agarra del userpath
      if (functions.linksEqualtoZero()) {
        console.log(functions.linksEqualtoZero());
        console.log("No se encontraron enlaces en el archivo.");
      } else { //if not pues si hay
        console.log("Enlaces encontrados:");
        resolve(links)
      }
    }
  })
  });
};




mdLinks();


//const separateLinks = /\[([^\]]+)\]\(([^)]+)\)/;

//const verifyValidUrl =  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

module.exports = mdLinks