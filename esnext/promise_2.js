// setTimeout(function(){
//     console.log('Executando CallBack')
    
//     setTimeout(function(){
//         console.log('Executando CallBack')
        
//         setTimeout(function(){
//             console.log('Executando CallBack')
            
//            },2000)
     
//         }, 2000)
// }, 2000)

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
      console.log('executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
.then(() => esperarPor())
.then(esperarPor)