let dobro = function (a){
    return 2 * a

}
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implícito
console.log(dobro(Math.PI))

let ola = function (){
    return 'olá'
}
ola= () => 'ola'

ola = _ => 'ola' // possui uma param
console.log(ola())

soma = _ => 2 + 2
console.log(soma())