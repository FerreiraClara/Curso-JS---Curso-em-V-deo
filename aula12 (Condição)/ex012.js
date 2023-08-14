let idade = 18

console.log(`Você tem ${idade} anos.`)

if(idade < 16){
    console.log('Não vota')
}else{
    if(/*idade >= 16 &&*/ idade <= 17){ // poderia ser também if(idade == 16 || idade == 17) ou if(idade < 18)
        console.log('Voto Opcional')
    }else{
        console.log('Voto Obrigatório')
    }
}