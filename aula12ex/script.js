function carregar(){
    var now = new Date()
    var hour = now.getHours()
    var minutes = now.getMinutes()
    var res = document.getElementById('res')
    var img = document.getElementById('img')
    var back = document.getElementById('background')

    if (hour > 5 && hour < 12){
        res.innerText = `Agora são ${hour} horas e ${minutes} minutos.`
        back.style.background = '#f2bc8d'
        img.src = '_imagens/manha-cortada.png'
    } else if (hour > 12 && hour < 17){
        res.innerText = `Agora são ${hour} horas e ${minutes} minutos.`
        back.style.background = '#cc602e'
        img.src = '_imagens/tarde-cortada.png'

    } else {
        res.innerText = `Agora são ${hour} horas e ${minutes} minutos.`
        back.style.background = '#1e2d48'
        img.src = '_imagens/noite-cortada.png'
    }
}

