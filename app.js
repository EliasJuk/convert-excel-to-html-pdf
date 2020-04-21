var Reader = require("./Reader")
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require('./HtmlParser')
var leitor = new Reader()

async function main(){
  var dados = await leitor.Read('./users.csv')    
  var dadosProcessados = Processor.Process(dados)
  //console.log(dadosProcessados)

  var usuarios = new Table(dadosProcessados)
  //console.log(usuarios.header)
  //console.log(usuarios.rows)

  //CONTAGEM DE COLUNAS E LINHAS
  //  console.log(usuarios.RowCount)
  //  console.log(usuarios.ColumnCount)

  var html = await HtmlParser.Parse(usuarios)
  console.log(html)

}

main()