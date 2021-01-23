var numeros = []
function interacao(vint){
    var nume = document.getElementById('txtn')
    var resposta = document.createElement('p')
    var resp = document.getElementById('res')
    var num = nume.value
    resposta.innerHTML = ''
    if(num < 1 || num > 100){
        alert('Número inválido. Preencha os campos corretamente')
    }else{
        if(vint == 0){
            if (numeros.indexOf(num) == -1){
                var tab = document.getElementById('caltab')
                var op = document.createElement('option')
                op.innerHTML = `Valor ${num} adicionado`
                tab.appendChild(op)
                numeros.push(num)
                nume.value = ''
                nume.focus()
            }else{
                alert('Número já está na lista.')
            }
        } else if(vint == 1){
            for(var c in numeros){
                var max = 1;
                var min = 1;
                if(numeros[c] > max){
                    max = numeros[c]
                }
                if(numeros[c] < min){
                    min = numeros[c]
                }
            }
            var s = 0
            for(var c in numeros){
                s += numeros[c]
            }
            resposta.innerHTML = `O vetor tem ${numeros.length} valores. <br>O menor valor é ${min}. <br>O maior valor é ${max}. <br>Somando tudo é ${s}. <br>A média dos valores é ${s/numeros.length}.`
        }
    }
    resp.appendChild(resposta)
}