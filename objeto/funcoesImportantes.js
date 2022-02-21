const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 20
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa,'dataNascimento',{
enumerable: true,
writable: false,
value: '01/02/2019'
})
pessoa.dataNascimento = '01/01/1999'
console.log(pessoa.dataNascimento)

// Objetct.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest,o1,o2)


const eu = {
    nome:  'hitallo',
    idade: 24,
    endereco : {
        rua: 'thiago silva',
        numero: 110
    }
}
console.log(eu)