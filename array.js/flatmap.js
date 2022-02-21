const escola = [{
nome : 'turma1',
alunos: [{
    nome:'gustavo',
    nota: 8.1
},
{
nome: 'Ana',
nota: 9.3
}]

}, {
nome: 'turma m2',
alunos: [{
    nome: 'Rebeca',
    nota: 8.9
},{
    nome: 'Roberto',
    nota: 7.3
   }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDoTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDoTurma)
console.log(notas1)
console.log([].concat( [ 8.1, 9.3 ], [ 8.9, 7.3 ] ))

Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotaDoTurma)
console.log(notas2)