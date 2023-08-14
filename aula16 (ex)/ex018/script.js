let txtnum = document.querySelector('input#numero')
let select = document.querySelector('select#valorAdicionado')
let res = document.querySelector('div#descrição')
let arrayNum = []

function Lista(n, lista){
    if(lista.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function Adicionar(){
    if(txtnum.value.length == 0){
        alert('Digite um número no campo indicado')
    }else{
        let num = txtnum.value

        res.innerHTML = ""

        if(num < 1 || num > 100){
        alert('Digite um número de 1 a 100')

        }else{
            if(!Lista(num, arrayNum)){
                arrayNum.push(Number(num))

                let option = document.createElement('option')
                document.createAttribute('value', num)
                option.innerHTML = `Valor ${num} adicionado`
                select.appendChild(option)
            
            }else{
                alert('Número já encontrado na lista')
            }

        }
    }

    txtnum.value = ""
    txtnum.focus()
}

function Finalizar(){
    if(arrayNum.length == 0){
        alert('Adicione valores')
    }else{
        arrayNum.sort(function(a, b){       // poderia usar o for (scriptAula.js)
            if(a > b) return 1
            if(a < b) return -1
            return 0
            
        })
        
        let txtplural = ""

        if(arrayNum.length == 1){
            txtplural = 'número cadastrado'
        }else{
            txtplural = 'números cadastrados'
        }

        res.innerHTML += `Ao todo, temos ${arrayNum.length} ${txtplural}<br>`
        res.innerHTML += `O maior valor informado foi ${arrayNum[arrayNum.length - 1]}<br>`
        res.innerHTML += `O menor valor informado foi ${arrayNum[0]}<br>`

        let soma = 0
        for(let c = 0; c < arrayNum.length; c++){
            soma += arrayNum[c]
        }

        let media = soma / arrayNum.length
        media = media.toFixed(2)

        res.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        res.innerHTML += `A média é ${media}<br>`

        res.style.fontSize = '15px'
        res.style.paddingTop = '10px'
    }
}