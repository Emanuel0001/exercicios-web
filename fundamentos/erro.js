function tratarErroELancar(erro){
    throw 10
    
}
function imprimirNomeGritando(obj){
try{ 
       console.log(obj.name.toUpperCase() + '!!!')

    } catch(e){

    tratarErroELancar(e)
    }
}

const obj = { name: 'Roberta'}
imprimirNomeGritando(obj)