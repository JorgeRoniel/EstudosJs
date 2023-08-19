function criaPessoa(nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        altura,
        peso,

        set nomeCompleto(n){
            n = n.split(' ')
            this.nome = n.shift()
            this.sobrenome = n.join(' ')
        },

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}.`
        },

        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}.`
        },

        imc(){
            indice = this.peso / (this.altura ** 2)
            return indice
        }
    }
}

const p1 = criaPessoa('Jorge', 'Roniel', 73, 1.86)
p1.nomeCompleto = 'Amanda Souza'
console.log(p1.fala('JS'))
console.log(p1.nomeCompleto)