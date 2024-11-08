const fs = require('fs');
module.exports = function(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,{
            encoding:'utf8'
        },(err,data)=>{
            if(err){
                reject(new Error(err));
                return;
            }
            resolve(data);
        })
    })
}