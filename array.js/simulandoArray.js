const quaseArray = {0: 'rafael', 1: 'Ana', 2: 'bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{
    value: function (){ return Object.values(this)}
    , enumerable: false
})
console.log(quaseArray[0])
const meuArray = ['Rafael','Ana','bia']
console.log(quaseArray.toString(),meuArray)