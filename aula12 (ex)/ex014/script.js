function carregar(){
    let msg = document.getElementById('texto')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 6){
        //BOA MADRUGADA
        img.src = 'assets/madrugada.png'
        document.body.style.background = 'rgb(148 152 161)'
    
    }else if(hora >= 6 && hora < 12){
        //BOM DIA
        img.src = 'assets/manha.png'
        document.body.style.background = 'rgb(151 131 113)'
    
    }else if(hora >= 12 && hora < 19){
        //BOA TARDE
        img.src = 'assets/tarde.png'
        document.body.style.background = 'rgb(156 61 11)'
    
    }else if(hora >= 19 && hora < 24){ // não precisaria da condição pq já está implícito
        //BOA NOITE
        img.src = 'assets/noite.png'
        document.body.style.background = 'rgb(23 43 52)'
    }

}