var txt1 = document.getElementById('txt1')
var res = document.getElementById('subtitle')
var btn = document.getElementById('btn')

btn.onclick = function calcular(){
    if(txt1.value.length == 0){
        alert('Dados Inválidos! Tente Novamente.')
    }else{
        var num = Number(txt1.value)
        res.innerText = `A tabuada do ${num}:\n\n`

        for(var i = 1; i <= 10; i++){
            var mult = num * i
            res.innerText += `${num} x ${i} = ${mult}\n`
        }
    }
    
}