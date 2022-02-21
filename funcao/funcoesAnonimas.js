const soma = function (x,y){
    return x + y

}
const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}
imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function (x,y){
    return x - y
})

imprimirResultado(3,4,(x,y) => x* y)

const pessoa ={
    falar: function (){
        console.log('opa')
    }
}
pessoa.falar()











const dividir = function (a,b){
    return a - b
}

imprirdivisao = function(x,y , calculo = dividir){
    console.log(calculo(x,y))
}
imprirdivisao(4,4)
