// Função em JS first-Class Object (citizens)
// Higher-order function

//  criar de fora literal

function fun1() {}

// Armazenar em uma variavel
const fun2 = function (){}

// Armazenar em um array
const array = [function (a, b) { return a + b} , fun1, fun2]
console.log(array[0](2,3))

// Armazenamento em um atributo de objeto
const obj ={}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
} run(function (){console.log('Executando...')})

//  uma função pode retornar / conter uma função
function soma (a,b){
    return function (c){
        console.log (a + b + c)

    }
}
soma(2,46)(4)