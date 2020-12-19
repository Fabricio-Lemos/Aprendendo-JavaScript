function contar(){
    var inicio = document.querySelector('input#txtinicio');
    var fim = document.querySelector('input#txtfim');
    var numpasso = document.querySelector('input#txtpasso');  
    var res = document.querySelector('div#res');
    var init = document.createElement('h2');
    res.innerHTML = ''
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var c = Number(inicio.value)

    //Erro verify
    if(numpasso.value.length == 0 || inicio.value.length == 0 || fim.value.length == 0){
        alert('FALTAM DADOS!!! PREENCHA CORRETAMENTE!!!')
        
    }else if(numpasso.value <= 0){
        alert('Passo inválido, consierando passo 1')
        var p = 1
    }else {
        var p = Number(numpasso.value)
    }

    //Calcules
    if(i < f){
        init.innerHTML = 'Contagem Crescente...'
        res.appendChild(init)
        while(c <= f){
            var mostra = document.createElement('p');
            mostra.innerHTML = `Contando: ${c}`
            res.appendChild(mostra)
            c += p
        }
    }else if(i > f){
            init.innerHTML = 'Contagem Decrescente...'
            res.appendChild(init)
            while(c >= f){
                var mostra = document.createElement('p');
                mostra.innerHTML = `Contando: ${c}`
                res.appendChild(mostra)
                c -= p
            }
    }
}
//Eu sei o codigo está uma desorganização e não está limpo, ainda não lí "clean code", mas lerei em breve. Estou no começo e muito feliz por pelo menos ter resolvido o exercicio antes de ver a resolução dele. Sinal de que comecei a pegar o jeito, espero que eu melhore com o tempo.