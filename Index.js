const fs = require('fs');

function ler(){
    fs.readFile("./input/test.txt",{encoding: 'utf-8'},(error, dados) => {
        if(error){
            console.log('Ocorreu um erro durante a leitura do arquivo!')
        }else{
            console.log(dados)
        }
    })
}

function escrever(){
    fs.writeFile("./output/dados.txt","Hello World", (err) => {
        console.log("Erro durante o salvamento...")
    })
}

function jsonfile(){
    fs.readFile("./input/usuario.json",{encoding: 'utf-8'},(err, dados) => {
        if(err){
            console.log("Ocorreu um erro durante a leitura!")
        }else{
            var conteudo = JSON.parse(dados)

            console.log(conteudo)
            conteudo.nome="Elias"
            console.log(conteudo)

            fs.writeFile("./input/usuario.json", JSON.stringify(conteudo), (err) => {
                if(err){
                    console.log("Um erro ocorreu durante a escrita")
                }
            })
        }
    })
}

jsonfile()