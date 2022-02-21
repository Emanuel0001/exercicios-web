class Pessoa{
    constructor(nome){
        this.nome = nome
    }
falar() 
{
console.log(`Meu nome é ${this.nome}`)

}}
const p1 = new Pessoa('João')
p1.falar()


const pessoa2 = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}` )
    }
}
const p2 = pessoa2('maria')
p2.falar()





const treino = dia =>{
    return{
        acao:() => console.log(`Hoje o treino é de ${dia}`)
    }
}
const recebe = treino('Costas')
recebe.acao()