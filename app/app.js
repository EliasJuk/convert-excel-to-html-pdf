var Reader = require("./Reader")
var Writer = require('./Writer')
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require('./HtmlParser')
var PDFWriter = require("./PDFWriter")

var leitor = new Reader()
var escritor = new Writer()

async function main(){
  var dados = await leitor.Read('../input/users.csv')    
  var dadosProcessados = Processor.Process(dados)
  //console.log(dadosProcessados)

  var usuarios = new Table(dadosProcessados)
  //console.log(usuarios.header)
  //console.log(usuarios.rows)

  //CONTAGEM DE COLUNAS E LINHAS
  //  console.log(usuarios.RowCount)
  //  console.log(usuarios.ColumnCount)

  var html = await HtmlParser.Parse(usuarios)
  //console.log(html)

  escritor.Write(`../output/${Date.now()}.html`,html)
  PDFWriter.WritePDF(`../output/${Date.now()}.pdf`,html)

}

main()