function falaComeco(comeco){
    function falaFinal(resto){
        return comeco + ' ' + resto
    }

    return falaFinal
}

const ola = falaComeco('ola')
const mundo = ola('mundo!')

console.log(mundo)