function Verificar(){
    let data = new Date()
    let ano_atual = data.getFullYear() //vai pegar com 4 dígitos

    let ano_nasc = document.getElementById('ano_nascimento')

    let res = document.querySelector('div#res')
    
    if(ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano_atual){
        alert('Erro! Verifique os dados e tente novamente')
    
    }else{
        ano_nasc = ano_nasc.value
        let sexo = document.getElementsByName('sexo')
        let idade = ano_atual - Number(ano_nasc)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto') // <img id="foto"> - criando imagem dinamicamente

        if(sexo[0].checked){
            gênero = 'homem'

            if(idade <= 10){
                res.innerHTML = `Você é uma criança ${gênero} de ${idade} anos<br/>`
                img.setAttribute('src', 'assets/bebe_homem.png')
            
            }else if(idade > 10 && idade < 20){
                res.innerHTML = `Você é um jovem ${gênero} de ${idade} anos<br/>`
                img.setAttribute('src', 'assets/jovem_homem.png')
            
            }else if(idade >= 20 && idade < 60){
                res.innerHTML = `Você é um adulto ${gênero} de ${idade} anos<br/>`
                img.setAttribute('src', 'assets/adulto_homem.png')
            
            }else if(idade >= 60){
                res.innerHTML = `Você é um idoso ${gênero} de ${idade} anos<br/>`
                img.setAttribute('src', 'assets/idoso_homem.png')
            
            }

        }else if(sexo[1]){
            gênero = 'mulher'

            if(idade <= 10){
                res.innerHTML = `Você é uma criança ${gênero} de ${idade} anos<br/>`
                img.setAttribute('src', 'assets/bebe_mulher.png')
            
            }else if(idade > 10 && idade < 20){
                res.innerHTML = `Você é uma jovem ${gênero} de ${idade} anos<br/>`
                img.setAttribute('src', 'assets/jovem_mulher.png')
            
            }else if(idade >= 20 && idade < 60){
                res.innerHTML = `Você é uma adulta ${gênero} de ${idade} anos<br/>`
                img.setAttribute('src', 'assets/adulto_mulher.png')
            
            }else if(idade >= 60){
                res.innerHTML = `Você é uma idosa ${gênero} de ${idade} anos<br/>`
                img.setAttribute('src', 'assets/idosa_mulher.png')
            
            }
        }
        
        res.style.textAlign = 'center'
        res.appendChild(img) //para adicionar um elemento

    }
}
