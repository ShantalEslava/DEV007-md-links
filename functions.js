const path = require('path');

function isAnMdFile(userPath){
   return path.extname(userPath) === ".md"?true:false
}



function linksEqualtoZero(links){
    return links === null ?true:false
}


module.exports ={
    isAnMdFile,linksEqualtoZero
}