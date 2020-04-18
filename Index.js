const fs = require('fs');

fs.readFile("./test.txt",{encoding: 'utf-8'},(error, dados) => {
    if(error){
        console.log('Ocorreu um erro durante a leitura do arquivo!')
    }else{
        console.log(dados)
    }
})