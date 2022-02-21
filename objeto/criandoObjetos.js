// usando a notação literal
const obj1 ={}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

//  funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * ( 1 - desc)

    }
}
const p1 = new Produto ('caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2999.90, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//  função factory
function criarFuncionario (nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('joão', 7000, 2)
const f2 = criarFuncionario('Maria', 6000, 1)

console.log(f1.getSalario(), f2.getSalario())



//  uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "sou um JSON')
console.log(fromJSON.info)
