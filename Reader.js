const fs = require("fs")
const util = require("util")

class Reader{
    //Corrige problema, de return do modulo fs    
    constructor(){
        this.reader = util.promisify(fs.readFile) //novaFuncaoComPromise -> funcaoVelhaComCallback
    }

    async Read(filepath){
        try{
            return await this.reader(filepath,"utf-8")
        }catch(err){
            return undefined;
        }
    }
}

module.exports = Reader