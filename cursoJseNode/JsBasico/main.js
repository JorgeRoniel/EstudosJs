const nome = document.getElementById('nome')
const idade = document.getElementById('Idade')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const btn = document.querySelector('#btn')
const resultado = document.querySelector('#res')

const pessoas = []
function criarPessoa(nome, idade, altura, peso){
    return {
        nome: nome,
        idade: idade,
        altura: altura,
        peso: peso
    }
}

resultado.innerText = `\n\n`
btn.onclick = function cadastrar(){
    novap = criarPessoa(nome.value, idade.value, altura.value, peso.value)
    pessoas.push(novap)
    console.log(pessoas)

    resultado.innerText += `${nome.value}, ${idade.value}, ${altura.value}, ${peso.value}.\n`
}