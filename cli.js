const mdLinks = require('./index')
const axios = require('axios')

const relativePath = process.argv[2];
//console.log("processarv2", process.argv[2])
mdLinks(relativePath).then(response => {
    //console.log("rutaCli",relativePath)
let broken = 0
let validate = process.argv.includes('--validate' )
let stats = process.argv.includes('--stats' )

    if ( validate || stats) {
        let promesas = response.map(link => {
            return axios.get(link.url).then(response =>{ //Axios revisa el estado de las url
                
                if (response.status >= 200 && response.status < 300 && validate && !stats ) { 
                    console.log({...link, status: response.status})
                }}).catch(error => {

                if(validate && !stats){ console.log({...link, status: 404}) }
                broken++
            });
        })
        Promise.all(promesas).then(estonoseusa =>{  //descubri que como nombre sustututo podria ser _ pero de momento asi lo dejo para recordar
            if (stats && validate){
                console.log('broken: ' + broken)
            }
        })
    } 
    if(stats) {
        console.log(response.length)
        //aqui va el set
        let unicos = new Set(response.map((link) =>link.url)).size //Set es una estructura de datos que solo permite elementos únicos
        console.log(unicos)

    }
    
})