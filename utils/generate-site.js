const fs = require('fs');

const writeFile = content=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/index.html',content,err=>{
            // if there is an error, reject the Promise and send the error to the Promise's '.catch' method
            if(err){
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'Your file has been created. find it in the "dist" directory!'
            });
        });
    });
};

const copyFile = ()=>{
    return new Promise((resolve, reject)=>{
        fs.copyFile('./src/style.css','./dist/style.css',err=>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet copied!'
            });
        });
    });
};

module.exports={writeFile,copyFile};