function mostrarHora(){
    const hora  = new Date()

    return hora.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function(){
    console.log(mostrarHora())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 6000)