//Importamos bibliotecas
const path = require('path');
const fs = require('fs'); //para leer
//Existe mdlinks como funcion
const mdLinks = () => {
  //prueba 1 creo que no sirve JAJA :(( 
  fs.existsSync( path )
  console.log("si ejecuta")
  //escogemos archivo
  const relativePath = process.argv[2];
  let userPath
  //Es absoluta??
  if (!path.isAbsolute(relativePath)) {
    //si no ->
    userPath = path.resolve(relativePath);

  }else{
    userPath = relativePath
  }
  //verificamos que sea archivo md
 if (path.extname(userPath)=== ".md") {
 console.log("el archivo es un .md")
 }
 
 else{ return;
  console.error(err)

 }
 //Pasamos los datos a un array y filtramos los linkss 

 if(userPath.md){
  fs.readFile(process.argv[2], 'utf8', (err, data)) => {
    if (err) {
        console.error(err);
        return;
        console.log(data);
        //meter links en array nuevo
          let arreglo = data.split("()")
          console.log(arreglo);
          //podriamos usar regex pq filtrar por espacios no esta sirviendo :(, preguntar si si
    }   
 }
};
 // Mostrar opciones
    // recibir input del usurio
}
mdLinks();

const separateLinks = /\[([^\]]+)\]\(([^)]+)\)/;
const findLinksMd = /\[([^\]]+)\]\(([^)]+)\)/g;
const verifyValidUrl = 
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

