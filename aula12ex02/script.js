function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade < 10) {
                img.setAttribute('src', '_imagens/manha-cortada.png')
            } else if (idade < 21) {
                img.setAttribute('src', '_imagens/tarde-cortada.png')
            } else if (idade < 50) {
                img.setAttribute('src', '_imagens/noite-cortada.png')
            } else {
                img.setAttribute('src', '_imagens/manha.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', '_imagens/manha-cortada.png')
            } else if (idade < 21) {
                img.setAttribute('src', '_imagens/tarde-cortada.png')
            } else if (idade < 50) {
                img.setAttribute('src', '_imagens/noite-cortada.png')
            } else {
                img.setAttribute('src', '_imagens/manha.jpeg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

/*Eu sei, você deve estar pensando: se é um verificador de idade por que você está usando imagens
do amanhecer e entarecer e noite. Minha Resposta é que deu preguiça de preparar novas imagens.
pode mandar imagens já tratadas se quiser e alterar o codigo para aplicar as imagens*/