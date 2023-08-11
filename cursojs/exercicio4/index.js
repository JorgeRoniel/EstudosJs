var idade = 45;
console.log(`Sua idade: ${idade}`)

if(idade < 16){
    console.log('Não vota')
}else if(idade >= 16 && idade < 60){
    console.log('Voto Obrigatório')
}else{
    console.log('Voto Opcional')
}