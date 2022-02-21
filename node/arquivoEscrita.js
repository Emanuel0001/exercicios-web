const fs = require('fs')

const produto ={
    nome: 'celular',
    preco: 1234.99,
    desconto: 0.15
}
// salvar produto em formato JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log( err || 'Arquivo salvo')

})