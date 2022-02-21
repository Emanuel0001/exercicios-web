
function getInteriroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1

do {
    opcao = getInteriroAleatorioEntre(-1, 10)
    console.log(`opção escolhida foi ${opcao}.`)
} while(opcao != -1)
console.log ('até a próxima!')