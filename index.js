//importamos bibliotecas
const axios = require('axios')
const path = require('path');
const fs = require('fs');

 
const mdLinks = (route) => {
  return new Promise((resolve, reject) => {


  
console.log(route)
const relativePath = route // Renombramos relativePath a filePath para mayor claridad
  
  if (!fs.existsSync(relativePath)) {
    console.log("El archivo no existe.");
    return;
  }

  const userPath = path.resolve(relativePath); //Solo convierte a ruta absoluta sin verificar si era o no ya que si si e ra no afecta en nada y si no  cumple con el proceso
  
  if (path.extname(userPath) === ".md") { //Vemos si es un archivo md o nopi
    console.log("El archivo es un archivo Markdown (.md).");
  } else {
    console.error("El archivo no es un archivo Markdown válido."); //si no es pues nos marca error
    return;
  }

  fs.readFile(userPath, 'utf8', (err, data) => { //entramos al archivo
    if (err) {
      console.error(err);
      return;
    } else {
      // Usamos una regex para encontrar los links
      const findLinksMd = /\[([^\]]+)\]\(([^)]+)\)/g;
      const links = [];

      // Agregamos los enlaces que cumplan con esos parametros del regex al array
      data.replace(findLinksMd, (match, text, url) => {
        links.push({ text, url });
      });
//if there are 0 pues no hay
      if (links.length === 0) {
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