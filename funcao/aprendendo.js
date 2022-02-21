// const testando = {
//     reflexao: 'eu vou aprender funcao',
//  naPratica(){
//      console.log(this.reflexao)
//  }
// }
// testando.naPratica()



//  const treino = {
//    dias :  ['segunda','terça', 'quarta', 'Quinta', 'Sexta:'],
// diasDeTreino(){
//     console.log(this.dias)
// } }
// treino.diasDeTreino()

function distancia (km){
    if( km <=  10){
        console.log(`Está consideravelmente perto: ${km}`)
}

    else {
        console.log(`consideravel longe: ${km}`)
  console.log('FIM!!!')
    }

    
}
distancia(10)