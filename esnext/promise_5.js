function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!!!')
        } else {
            resolve(valor)

        }
    })
}

funcionarOuNao('testando', 0.5)
.then(v => console.log(`Valor: ${v}`))
.then(
    v => console.log(v),
    // err => console.log(`Erro: ${err}`)
    )
.then(() => console.log('Quase fim!'))
.catch(err => console.log(`Erro: ${err}`))
.then(()=> console.log('fim') )