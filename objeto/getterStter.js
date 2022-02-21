const sequencia = {
     _valor: 1, // convenção
     get valor () { return This._valor++},
     set valor (valor){
         if (valor > this._valor){
             this._valor = valor
         }
     }
}
console.log (sequencia.valor, sequencia.valor)