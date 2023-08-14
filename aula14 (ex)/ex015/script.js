function Contar(){
    let txtinicio = document.getElementById('inicio')
    let txtfim = document.getElementById('fim')
    let txtpasso = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = ""
        alert('Não foi possível contar. Preencha todos os campos.')
    }else{

        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        if(passo <= 0){
            alert('Passo Inválido. Considerando PASSO = 1')
            passo = 1
        }

        res.innerHTML = `${inicio} &#128073`

        if(inicio <= fim){
            //Contagem progressiva

            while(inicio <= fim){
                inicio += passo
                if(inicio <= fim){
                    res.innerHTML += `${inicio} &#128073`;
                }
            }

        }else if(inicio >= fim){
            //Contagem regressiva

            while(inicio >= fim){
                inicio = inicio - passo
                if(inicio >= fim){
                    res.innerHTML += `${inicio} &#128073`;
                }
            }

        }else{
            res.innerHTML = `Erro`;
        }

        res.innerHTML += `&#127937;`;

    }
}

/*Dificuldades que eu tive:

inicio.VALUE.LENGTH == 0

let inicio = Number(txtinicio.VALUE)

fazer o passo >= 0 valer 1 (onde colocar)

&#128073

\u{código do emoji} - ex: \u{1F449}

*/
