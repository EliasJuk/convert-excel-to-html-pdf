const fs = require('fs');

function ler(){
    fs.readFile("./test.txt",{encoding: 'utf-8'},(error, dados) => {
        if(error){
            console.log('Ocorreu um erro durante a leitura do arquivo!')
        }else{
            console.log(dados)
        }
    })
}

function escrever(){
    fs.writeFile("./output/test.txt","Hello World", (err) => {
        console.log("Erro durante o salvamento...")
    })
}

escrever()