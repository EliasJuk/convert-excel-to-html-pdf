const fs = require('fs');

//Faz a leitura do arquivo e printa no console
function ler(){
    fs.readFile("./input/test.txt",{encoding: 'utf-8'},(error, dados) => {
        if(error){
            console.log('Ocorreu um erro durante a leitura do arquivo!')
        }else{
            console.log(dados)
        }
    })
}

//Cria ou Sobscreve um arquivo e salva na output
function escrever(){
    fs.writeFile("./output/dados.txt","Hello World", (err) => {
        console.log("Erro durante o salvamento...")
    })
}

//Faz a leitura do arquivo usuario na pasta input e salva na output
function jsonfile(){
    fs.readFile("./input/usuario.json",{encoding: 'utf-8'},(err, dados) => {
        if(err){
            console.log("Ocorreu um erro durante a leitura!")
        }else{
            var conteudo = JSON.parse(dados)

            console.log(conteudo)
            conteudo.nome="Elias"
            console.log(conteudo)

            fs.writeFile("./output/usuario.json", JSON.stringify(conteudo), (err) => {
                if(err){
                    console.log("Um erro ocorreu durante a escrita")
                }
            })
        }
    })
}

//Faz a leitura do arquivo usuario na pasta input e salva na output
function modificarUsuario(nome, curso, categoria){
    fs.readFile("./input/usuario.json",{encoding: 'utf-8'},(err, dados) => {
        if(err){
            console.log("Ocorreu um erro durante a leitura!")
        }else{
            var conteudo = JSON.parse(dados)

            conteudo.nome= nome
            conteudo.curso= curso
            conteudo.categoria= categoria
            

            fs.writeFile("./output/usuario.json", JSON.stringify(conteudo), (err) => {
                if(err){
                    console.log("Um erro ocorreu durante a escrita")
                }
            })
        }
    })
}


//ler()
//escrever()
//jsonfile()
//modificarUsuario("Amanda", "Master PHP", "PHP")