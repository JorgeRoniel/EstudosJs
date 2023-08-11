var txt1 = document.getElementById('txt1')
var table = document.getElementById('array')
var btn = document.getElementById('btn')
var btn2 = document.getElementById('btn2')
var res = document.getElementById('subtitle')
var vetor = []

function inLista(vetor, num){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] == num){
            return true
        }
    }
    return false
}

function maior(vetor){
    var maior = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
    }

    return maior
}

function menor(vetor){
    var menor  = 99999;
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < menor){
            menor = vetor[i]
        }
    }

    return menor;
}

function somatorio(vetor){
    var soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    return soma
}

function media(vetor){
    soma = somatorio(vetor)
    return soma / vetor.length
}


btn.onclick = function adicionar(){
    if(txt1.value.length == 0){
        alert('Nenhum dado digitado! Tente Novamente.')
    }else{
        var num = Number(txt1.value)
        if(inLista(vetor, num)){
            alert('Esse numero ja consiste no vetor, tente novamente!')
        }else{
            vetor.push(num)
            var op = document.createElement('option')
            op.text += `O valor ${num} foi adicionado!`
            table.appendChild(op)
        }
        
    }
    
}

btn2.onclick = function showAll(){
    if(vetor.length == 0){
        alert('Nenhum dado digitado! Tente Novamente.')
    }else{
        res.innerText = `O vetor tem ${vetor.length} elementos\n`
        res.innerText += `O maior elemento é ${maior(vetor)}.\n`
        res.innerText += `O menor elemento é ${menor(vetor)}.\n`
        res.innerText += `A soma dos elementos é ${somatorio(vetor)}.\n`
        res.innerText += `A media dos elementos é ${media(vetor)}.`
    }
    
}