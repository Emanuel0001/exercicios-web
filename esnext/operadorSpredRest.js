// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de funcao

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1200.2}
const clone = { ativo: true, ... funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['joao', 'Pedro', 'Gloria']
const grupoFinal = ['maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)