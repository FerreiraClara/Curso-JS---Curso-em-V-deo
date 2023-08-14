let sorteado = 0
let res = document.querySelector('div#res')

function Sortear(){
    let max = 100
    let min = 1
    let dif = max - min
    let aleatorio = Math.random()
    sorteado = min + Math.trunc(dif * aleatorio)
}

function Jogo(){
    let num = Number(prompt('Tente um número'))

    if(num < 0 || num > 100){
        alert('Digite um número válido. Entre 1 e 100')

    }else if(num < sorteado){
        res.innerHTML += `O número sorteado é <strong>MAIOR</strong> do que ${num}<br>`
    
    }else if(num > sorteado){
        res.innerHTML += `O número sorteado é <strong>MENOR</strong> do que ${num}<br>`

    }else if(num == sorteado){
        res.innerHTML += `<p><strong>Parabéns!!</strong> O número sorteado foi ${num}!! Você acertou.</p><br>`

    }
}