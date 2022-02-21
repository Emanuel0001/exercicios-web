function gerarNumerosEntre(min, max){
    if(min > max){
       [max,min] = [min, max]
    }

    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * (max - min + 1))
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1,30).then(console.log)