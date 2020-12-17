var now = new Date()
var hour = now.getHours()
var minutes = now.getMinutes()
var res = document.getElementById('res')
var back = document.getElementById('background')

res.innerText = `Agora são ${hour} horas.`

if (hour > 5 && hour < 12){
    res.innerText = `Agora são ${hour} horas e ${minutes} minutos.`
    back.style.background = 'rgba(158, 128, 64, 0.747)'
} else if (hour > 12 && hour < 17){
    res.innerText = `Agora são ${hour} horas e ${minutes} minutos.`
    back.style.background = 'rgba(253, 173, 24, 0.808)'
} else {
    res.innerText = `Agora são ${hour} horas e ${minutes} minutos.`
    back.style.background = 'rgba(90, 90, 90, 0.808))'
}