let valor // nao inicializado
console.log(valor)

valor = null //ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco)

    produto.preco = 100,00

console.log(produto.preco)

produto.preco = undefined 

console.log(!!produto.preco)
// deleta produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)
