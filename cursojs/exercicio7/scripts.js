var txt1 = document.getElementById('txt1')
var txt2 = document.getElementById('txt2')
var cont_txt = document.getElementById('cont')
var res = document.getElementById('subtitle')


btn.onclick = function contar(){
    if(txt1.value.length == 0 || txt2.value.length == 0 || cont_txt.value.length == 0){
        alert('Por favor, informe corretamente os numeros para realizar a contagem!')
    }else{
        cont = Number(cont_txt.value)
        res.innerText = 'Contando:'
        if(cont == 0){
            alert('A contagem por 0 sera ignorada e contará de 1 em 1.')
            cont = 1
        }

        var n1 = Number(txt1.value)
        var n2 = Number(txt2.value)
        var i = 0;

        if(n1 > n2){
            var c = 0
            for(c = n1; c >= n2; c -= cont){
                res.innerHTML += " " + c
            }
        }else{
            for(i = n1; i <= n2; i += cont){
                res.innerHTML += " " + i
            }
        }
    }
}