let valores = [8, 1, 7, 4, 2, 9]

// BLOCO 1

/*
for(let cont = 0; cont < valores.length; cont++){
    console.log(`A posição ${cont} tem o valor ${valores[cont]}`)
}

for(cont in valores){ //cont já foi definido no for anterior
    console.log(valores[cont])
}
*/


// BLOCO 2

let posição = valores.indexOf(7)


// BLOCO 2 - PART 1


/*
console.log(`O valor 7 está na posição ${posição}`)

posição = valores.indexOf(14)

console.log(`O valor 14 está na posição ${posição}`) // -1 segnifica q procurou e n achou
*/


// BLOCO 2 - PART 2 (ESTRUTURA CONDICIONAL)


if(posição == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${posição}`)
}



