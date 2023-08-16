(function(){
    sobrenome = 'Souza'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(criaNome('Isabel'))
    }

    falaNome()
})()