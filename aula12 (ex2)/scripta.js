function Verificar(){
    let data = new Date()
    let ano_atual = data.getFullYear() //vai pegar com 4 dígitos

    let ano_nasc = document.getElementById('ano_nascimento')

    let res = document.querySelector('div#res')
    
    if(ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano_atual){
        alert('Erro! Verifique os dados e tente novamente')
    
    }else{
        let sexo = document.getElementsByName('sexo')
        let idade = ano_atual - Number(ano_nasc.value)
        let gênero = ''

        if(sexo[0].checked){
            gênero = 'Homem'
        }else if(seco[1].checked){
            gênero = 'Mulher'
        }

        res.innerHTML = `${gênero} e ${idade}`
    }
/*
    if(idade <= 10 && gênero == 'Mulher'){
        res.innerHTML = `Você é uma criança mulher de ${idade} anos`
    
    }else if(idade <= 10 && gênero == 'Homem'){
        res.innerHTML = `Você é uma criança homem de ${idade} anos`
    
    }else if(idade > 10 && idade < 20 && gênero == 'Mulher'){
        res.innerHTML = `Você é uma jovem mulher de ${idade} anos`
    
    }else if(idade > 10 && idade < 20 && gênero == 'Homem'){
        res.innerHTML = `Você é um jovem homem de ${idade} anos`
    
    }else if(idade >= 20 && idade < 60 && gênero == 'Mulher'){
        res.innerHTML = `Você é uma adulta mulher de ${idade} anos`
    
    }else if(idade > 20 && idade < 60 && gênero == 'Homem'){
        res.innerHTML = `Você é um adulto homem de ${idade} anos`
    
    }else if(idade >= 60 && gênero == 'Mulher'){
        res.innerHTML = `Você é uma idosa mulher de ${idade} anos`
    
    }else if(idade > 60 && gênero == 'Homem'){
        res.innerHTML = `Você é um idoso homem de ${idade} anos`
    
    }
    res.innerHTML = `Você é uma mulher e tem ${idade} anos`
*/
}
