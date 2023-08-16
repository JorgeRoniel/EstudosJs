const funcao = function(op, acumulador, ...numeros){
    for(let n of numeros){
        if(op === '+') acumulador += n
        if(op === '-') acumulador -= n
        if(op === '*') acumulador *= n
        if(op === '/') acumulador /= n 
    }

    console.log(acumulador)
}

funcao('+', 0, 1,2,3,4,5)
funcao('-', 200, 1,2,3,4,5)
funcao('*', 1, 1,2,3,4,5)
funcao('/', 2, 1,2,3,4,5)


function funcao2(){
    for(let n of arguments){
        console.log(n)
    }
}

funcao2(1, 2, 3, [4, 4, 4], 'oi')

const soma = (x, y) => { return x + y }

console.log(soma(7, 3))