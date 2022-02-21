let a = 1
console.log(a)

let b = new Promise(function( resolve){

    resolve(['eu', 'tu', 'nois'])
})

function primeiroElemento( array){
    return array[0]
    }
function primeiraLetra(string){
    return string[0]
}
const letraMinuscula = letra => letra.toLowerCase()
b
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)