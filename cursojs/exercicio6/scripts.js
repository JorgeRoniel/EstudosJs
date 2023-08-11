var agora = new Date()
var ano = agora.getFullYear()

var txt1 = document.getElementById('txt1')
var sexo = document.getElementsByName('sexo')
var btn = document.getElementById('btn')
var res = document.getElementById('subtitle')

btn.onclick = function verificar(){
    var n_ano = Number(txt1.value)
    if(txt1.value.length = 0 || n_ano > ano){
        alert('Dados inválidos, tente novamente!')
    }else{
        var idade = ano - n_ano
        if(sexo[0].checked){
            res.innerText = `Um homem de ${idade} anos`
        }else if(sexo[1].checked){
            res.innerText = `Uma mulher de ${idade} anos`
        }
    }
}
