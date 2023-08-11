const input = document.getElementById('input')
const btn_add = document.getElementById('btn-add')
const lista = document.getElementById('lista')


function criarLi(){
    const li = document.createElement('li')
    return li
}

function criarTarefa(textoInput){
    const li = criarLi()
    li.innerHTML = textoInput
    lista.appendChild(li)
    criarBotaoDel(li)
    limpaInput()
    salvarTarefa()
}

function limpaInput(){
    input.value = ''
    input.focus()
}

function criarBotaoDel(li){
    li.innerHTML += ' '
    const botao = document.createElement('button')
    botao.innerHTML = 'Apagar'
    botao.setAttribute('class', 'apagar')
    li.appendChild(botao)
}

input.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        criarTarefa(input.value)
    }
})

btn_add.addEventListener('click', function(){
    criarTarefa(input.value)
})

document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefa()
    }
})

function salvarTarefa(){
    const tarefaLi = lista.querySelectorAll('li')
    const listaDeTarefas = []

    for(tarefas of tarefaLi){
        let tarefasTexto = tarefas.innerText
        tarefasTexto = tarefasTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefasTexto)
    }

    const tarefasJson = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJson)
}

function adicionarTarefasSalvas(){
    const tarefs = localStorage.getItem('tarefas')
    const listadeTarefas = JSON.parse(tarefs)

    for(let tarefa of listadeTarefas){
        criarTarefa(tarefa)
    }
}
adicionarTarefasSalvas()