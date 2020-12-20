var botao = document.querySelector('input#bnum')
botao.addEventListener('click', function(){calcular()})

function calcular(){
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#caltab')
    if (num.value.length == 0){
        window.alert('Número inválido. Digite um número válido.')
    } else {
        var n = num.value
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}