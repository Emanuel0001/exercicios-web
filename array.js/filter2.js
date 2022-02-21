Array.prototype.filter2 = function(callback){
  const newArray = []
    for(let i = 0; i < this.length; i++){
    if( callback(this[i],i,this)){
        newArray.push(this[i])
    }
  } return newArray              
}
const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.09, fragil: true},
    {nome: 'Copo de plástico', preco: 5.90, fragil: false}
    ]
    
    console.log(produtos.filter(function(p){
        return false
    }))
    
    const caro = produtos => produtos.preco >= 500
    const fragil = produtos => produtos.fragil 
    console.log(produtos.filter(caro).filter(fragil))