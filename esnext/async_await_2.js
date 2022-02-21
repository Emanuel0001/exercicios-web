function gerarNumerosEntre(min,max, numeroProibidos){
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numeroProibidos.includes(aleatorio)){
            reject('Numero repetido')

        } else {
            resolve ( aleatorio)
        }
    })
}''
async function gerarMegaSena(qtdNumeros){
const numeros = []
    for(let _ of Array(qtdNumeros).fill()){
numeros.push( await gerarNumerosEntre(1,60, numeros))
    }
    return numeros
}

gerarMegaSena(8)
 .then(console.log)
 .catch(console.log)