var img = document.getElementById('img')
var titulo = document.getElementById('title')
var subtitulo = document.getElementById('subtitle')

var hora = new Date()
var h1 = hora.getHours()

if(h1 >= 0 && h1 <= 12){
    //bom dia 
    titulo.innerHTML = 'Bom Dia'
    subtitulo.innerHTML = `São ${h1} horas!`
}else if(h1 > 12 && h1 <= 18){
    // boa tarde
    titulo.innerHTML = 'Boa Tarde'
    subtitulo.innerHTML = `São ${h1} horas!`
    img.src="./imgs/tarde.jpeg";
    document.body.style.backgroundColor = '#DAA520'
}else{
    //boa noite
    titulo.innerHTML = 'Boa Noite'
    subtitulo.innerHTML = `São ${h1} horas!`
    img.src="./imgs/noite.jpg";
    document.body.style.backgroundColor = '#2F4F4F'
}
