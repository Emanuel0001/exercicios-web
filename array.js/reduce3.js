Array.prototype.reduce2 = function (callback){
    let acumulador = this [0]
    for(let i = 1; i < this.length; i ++){
       acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma))

const somar = (total,valor) => total - valor
const nums2 = [1,2,3,4,5,6,7,8,9]
console.log(nums2.reduce2(somar))