const path = require('path');

function isAnMdFile(userPath){
   return path.extname(userPath) === ".md"?true:false
}



function linksEqualtoZero(links){
    return links === null ?true:false
}

function itsAbsolute(relativePath){
    path.resolve(relativePath)
}
module.exports ={
    isAnMdFile,linksEqualtoZero
}
//function uefeteocho(userPath){}