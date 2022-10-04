//verifica se o valor é igual 5, a 200 , a400 e se esta entre 500 e 1000
let num = 576//Number(prompt("digite um numero"))
const verifica = num === 5 || num === 200 || num === 400  ? true : false
//console.log(verifica);

const verificaEntreValores = num >= 500 && num <= 1000 ? true : false
console.log(verificaEntreValores);