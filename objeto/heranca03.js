const pai = {nome: 'pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)
console.log(filha1)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha1))

for(let key in filha1){
filha2.hasOwnProperty(key)?
console.log(key): console.log('Por heranca')
}