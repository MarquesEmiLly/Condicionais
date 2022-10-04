function idade(nascimento) {
    let atual = 2022
    const calcula = atual - nascimento
    //return calcula
    if (calcula < 18) {
        return 'MENOR DE IDADE'
    }
    else {
        return 'Maior de idade'
    }
}
console.log(idade(2009))
