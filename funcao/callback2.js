const notas = [4.5, 5.4, 6.3, 7.7, 9.0]

//sem callback
let notasBaixas =[]
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// call back
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

//com arrow Function
const notasBaixas3 = notas.filter(notas => notas <7)
console.log(notasBaixas3)

// eu testando


const saldo = [10, 20 , 30, 100,200]

const verificacao = saldo.filter(saldo => saldo >= 100)
console.log(verificacao)



const aluguel = [26, 16 , 10]
const diaDePagemento = aluguel.filter(aluguel => aluguel == 16)

console.log(diaDePagemento)





const somando =[1,2]

const soma = somando.filter(somando => somando <= 5)
console.log(soma)
}
}
