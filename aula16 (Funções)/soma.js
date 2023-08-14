let soma = function(n1, n2){
    return n1 + n2
}

console.log(soma(2, 8))


// PARÂMETROS PRÉ DEFINIDOS CASO UM DOS VALORES NÃO SEJAM PASSADOS


function somar(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(somar(2))