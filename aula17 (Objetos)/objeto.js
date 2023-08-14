let amigo = {nome: 'Clara', 
sexo: 'F', 
peso: 54.6, 
engordar(p=0){              // método
    console.log('Engordou')
    this.peso += p
}}

/*
oq diferencia o objeto do array é que em vez de ser obrigatóriamente a chave/índice 0 
(que futuramente pode causar problemas, ficar preso ao vetor "sem sentido"), no objeto
é possível ter um identificador/atributo literal

objeto é mais evoluído

além de guardar atributos, o objeto também pode guardar funcionalidade/métodos
*/

console.log(typeof amigo)
console.log(amigo)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

valor = 5
let quilos = amigo.engordar(valor)
console.log(`${amigo.nome} engordou ${valor}kg e agora pesa ${amigo.peso}kg`)
