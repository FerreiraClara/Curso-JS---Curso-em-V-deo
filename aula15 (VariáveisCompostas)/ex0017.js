let num = [8, 5, 6]

console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(num[0])
console.log(num[1])
console.log(num[2])

console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor 0 (antes de por em ordem crescente) é ${num[0]}`)

console.log(`A ordem crescente do vetor é ${num.sort()}`)
console.log(`O vetor 0 agora é o ${num[0]}`)

num.push(3)

console.log(num)
console.log(`Agora, a ordem crescente do vetor é ${num.sort()}`)
console.log(`O vetor 0 passa a ser o ${num[0]}`)

num[0] = 6 // nao acrescentou na frente, mas sim substituiu o 3 pelo 6

console.log(num)

