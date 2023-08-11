const form = document.getElementById('form')

form.addEventListener('submit', function (event){
    event.preventDefault();
    const inputP = document.getElementById('peso')
    const inputA = document.getElementById('altura')

    var peso = Number(inputP.value)
    var altura = Number.parseFloat(inputA.value)
    var msg = ''

    if(inputP.value.length == 0 || inputA.value.length == 0){
        alert('Digite algum valor!')
        setResult('Inválido!', false)
    }else{
        const imc = peso / (altura ** 2)
        imc.toFixed(2)
        if(imc <= 18.4){
            msg = `Seu IMC é ${imc.toFixed(2)} (Abaixo do Peso)`
        }else if(imc >= 18.5 && imc <= 24.9){
            msg = `Seu IMC é ${imc.toFixed(2)} (Peso Normal)`
        }else if(imc >= 25 && imc <= 29.9){
            msg = `Seu IMC é ${imc.toFixed(2)} (Acima do Peso)`
        }else if(imc >= 30 && imc <= 34.9){
            msg = `Seu IMC é ${imc.toFixed(2)} (Obesidade I)`
        }else if(imc >= 35 && imc <= 40){
            msg = `Seu IMC é ${imc.toFixed(2)} (Obesidade II)`
        }else if(imc >= 40){
            msg = `Seu IMC é ${imc.toFixed(2)} (Obesidade III)`
        }
        setResult(msg, true)
    }
})

function setResult(msg, isValid){
    const res = document.getElementById('res')
    res.innerHTML = ''

    const p = document.createElement('p')
    if(isValid){
        p.classList.add('paragrafo-result')
    }else{
        p.classList.add('bad')
    }
    
    p.innerHTML = msg
    res.appendChild(p)
}