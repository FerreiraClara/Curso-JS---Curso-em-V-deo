let txtnum = document.querySelector('input#numero')
let select = document.querySelector('select#valorAdicionado')
let res = document.querySelector('div#descrição')
let arrayNum = []

function inNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function Adicionar(){
    if(inNumero(txtnum.value) && !inLista(txtnum.value, arrayNum)){
        arrayNum.push(Number(txtnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtnum.value} adicionado`
        select.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Número já encontrado na lista')
    }
    txtnum.value = ""
    txtnum.focus() // colocar o foco no input... ao adicionar, vai apagar o input e logo em seguida, o input já vai estar preparado para escrever outro, automaticamente 
}

function Finalizar(){
    if(arrayNum.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let tot = arrayNum.length
        let maior = arrayNum[0]
        let menor = arrayNum[0]
        let soma = 0
        let media = 0

        for(let pos in arrayNum){
            soma += arrayNum[pos]
            if(arrayNum[pos] > maior){
                maior = arrayNum[pos]
            }
            if(arrayNum[pos] < menor){
                menor = arrayNum[pos]
            }

        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados</p><br>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p><br>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p><br>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p><br>`
        res.innerHTML += `<p>A média é ${media}</p>`
    }
}