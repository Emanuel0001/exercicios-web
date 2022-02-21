//  nao aceita repetição / nao indexa

const times = new Set()
times.add('vasco')
times.add('são paulo').add('palmerias').add('corinthians')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))