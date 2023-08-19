function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y tem que ser numeros!')
    }

    return x + y
}

try{
    console.log(soma(1, 2))
    console.log(soma('1', 2))
}catch(err){
    console.log('Houve um erro')
    console.log(err)
}

// Temos tambem a 'Finally' que é sempre executa o que está em seu escopo

