//  tagged templates - processa o template dentro de uma funcao
function tag (partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string'
}
const aluno = 'gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}`)