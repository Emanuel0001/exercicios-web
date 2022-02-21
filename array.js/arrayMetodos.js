const pilotos = ['vetell', 'alonso', 'raikkonen', 'massa']

pilotos.pop() //massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift(pilotos)//remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos 

//  adicionar
pilotos.slice(2,0,'bottas','massa')
console.log(pilotos)

// remover
pilotos.splice(3,1) // massa quebrou :(
    console.log(pilotos)
    
    const algunsPilotos1 = pilotos.splice(2) //novo array
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.splice(1,4)
console.log(algunsPilotos2)
