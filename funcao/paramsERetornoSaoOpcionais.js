function area(largura, altura){
    const area = largura * altura
    if(area > 20){
console.log(`valor acima do permitido: ${area}m2.`)
    } else{
        return area
    }
}
 console.log(area(2,2))
 console.log(area(2))
 console.log(area())
 console.log(area(2,3,17,22,53))
 console.log(area(5,5))

 function imc(altura,peso){
    let multiplicacao = altura * 2
    var imc =  peso / multiplicacao
    console.log(`Seu imc é igual a: ${imc}`)
    }
 imc(172, 68)
 