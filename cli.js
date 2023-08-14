const mdLinks = require('./index')
const axios = require('axios')

const relativePath = process.argv[2]; // Renombramos relativePath a filePath para mayor claridad

mdLinks(relativePath).then(response => {
    
let broken = 0
let validate = process.argv.includes('--validate' )
let stats = process.argv.includes('--stats' )

    if ( validate || stats) {
        let promesas = response.map(link => {
            return axios.get(link.url).then(response =>{
                
                if (response.status >= 200 && response.status < 300 && validate && !stats ) { 
                    console.log({...link, status: response.status})
                 }}).catch(error => {
                if(validate && !stats){ console.log({...link, status: 404}) }
                broken++
            });
        })
        Promise.all(promesas).then(_ =>{
            if (stats && validate){
                console.log('broken: ' + broken)
            }
        })
    } 
    if(stats) {
        console.log(response.length)
        //aqui va el set
        let unicos = new Set(response.map((link) =>link.url)).size 
        console.log(unicos)

    }
    
})
//new Set(links.map((link) => link.href)).size
//total unicos rotillos
//re