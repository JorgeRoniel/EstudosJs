const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
var segundos = 0
var timer

function mostrarHora(segundos){
    let hora = new Date(segundos * 1000)
    return hora.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = mostrarHora(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('relogio-pausar')
    clearInterval(timer)
    iniciarRelogio()
})

pausar.addEventListener('click', function(event){
    relogio.classList.add('relogio-pausar')
    clearInterval(timer)
})

zerar.addEventListener('click', function(event){
    relogio.classList.remove('relogio-pausar')
    clearInterval(timer)
    relogio.innerHTML = "00:00:00"
    segundos = 0

})