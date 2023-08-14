function parImpar(n){   //parâmetro
    if(n % 2 == 0){     //ação (tudo que tá entra as chaves)
        return 'par'    //retorno
    }else{
        return 'ímpar'
    }
}

let res = parImpar(4)   // chamada(parâmetro)

console.log(`${res}`)   // res passa a valer o retorno ímpar ou o retorno par