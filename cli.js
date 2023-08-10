const mdLinks = require('./index')
const axios = require('axios')

const relativePath = process.argv[2]; // Renombramos relativePath a filePath para mayor claridad

mdLinks(relativePath).then(response => {
    
    if (process.argv.includes('--validate')) {
        response.forEach(link => {
            axios.get(link.url).then(response =>{
                
                if (response.status >= 200 && response.status < 300) {
                  console.log({...link, status: response.status})
              }}).catch(error => {
                console.log({...link, status: 404})

              });
        })
    } else if(process.argv.includes('--stats')) {
        console.log(response.length)
    }else {
    console.log(response)}
    
})