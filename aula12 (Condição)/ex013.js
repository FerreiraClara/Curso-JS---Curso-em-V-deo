let agora = new Date() // pegar a hora atual
let hora = agora.getHours()

console.log (`Agora são exatamente ${hora} horas.`)


if(hora >= 6 && hora < 12){
    console.log ('Bom dia!')

}else if(hora >= 12 && hora < 19){
    console.log ('Boa tarde!')

}else if(hora >= 19 && hora < 24){
    console.log ('Boa noite!')

}else if(hora >= 0 && hora < 6){
    console.log('Boa madrugada!')
}



/*

if(hora >= 0 && hora < 6){
    console.log('Boa madrugada!')

}else if(hora < 12){
    console.log ('Bom dia!')

}else if(hora < 19){
    console.log ('Boa tarde!')

}else if(hora < 24){
    console.log ('Boa noite!')

}

*/