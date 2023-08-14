function GerarTabuada(){
    let txtnumero = document.querySelector('input#numero')
    let select = document.querySelector('select#tabuada')
    let cont = 1
    let res = ""

    if(txtnumero.value.length == 0){
        alert('Por favor, digite um número')

    }else{
        let numero = Number(txtnumero.value)

        select.innerHTML = ""

        for(cont = 1; cont <= 10; cont++){
            res = numero * cont

            let item = document.createElement('option')

            item.text = `${numero} x ${cont} = ${res}`

            item.setAttribute('value', `${res}`)

            select.appendChild(item)


        }
    }
}

// &#10; QUEBRA DE LINHA DENTRO DO TEXTAREA 

/* DIFICULDADES TIDAS:

fazer o select dinamico

*/