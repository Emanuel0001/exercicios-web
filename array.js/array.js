console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = ['bia', 'carlos ', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
aprovados [3] = 'paulo'
console.log(aprovados[3])
aprovados.push()
aprovados.push('abia')
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()

delete aprovados[1]