function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutes} minutos.`
    if (hora >= 0 && hora < 12 ){
        // Bom Dia!
        img.src = 'fotospng/fotomanha.png'
        document.body.style.background = '#f0e7e0'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'fotospng/fototarde.png'
        document.body.style.background = '#8f7568'
    } else {
        // Boa Noite!
        img.src = 'fotospng/fotonoite.png'
        document.body.style.background = '#2d2620'
    }        
}
