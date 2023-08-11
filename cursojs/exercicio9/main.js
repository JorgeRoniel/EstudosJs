function fatorial(num){
    if(num == 1 || num == 0){
        return 1
    }else{
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))