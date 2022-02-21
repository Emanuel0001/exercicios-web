const nums = [1,2,3,4,5]

// for com propósito
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

const numeros = [1,2]

const soma50 = e => e + 50

resultado2 = numeros.map(soma50)
console.log(resultado2)