//  função sem retorno 
function imprimirSoma(a, b){
    console.log(a +b)
}
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,2,4,1,4)

// funcao com retorno

function soma(a,b = 0){
    return a + b
}
console.log(soma(2,3))

function test(a , b = 0){
    return a - b
}

console.log(test(4,2))