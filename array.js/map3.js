Array.prototype.map2 = function(callback){
    for(let i = 0; i > this.length; i++){
       newArray.push( callback(this[i],i,this))

    }
    return newArray
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 13.45}',
    '{ "nome": "kit de lapis", "preco": 41.45}',
    '{ "nome": "caneta", "preco": 7.55}'


    
]
const paraObjeto = json => JSON.parse(json)
 const retorna = e => e.preco
const resultado = carrinho.map(paraObjeto).map(retorna)
console.log(resultado)
