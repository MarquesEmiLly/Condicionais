//leia dois numeros e mostre o quadrado do menor numero e raiz quadrada do mair numero se for possivel
let num1 = 16
let num2 = 4
const menorNum1 = num1 < num2 ? true : false
const menorNum2 = num2 < num1 ? true : false
if (menorNum1 === true) {
    let quadrado = Math.pow(num1, 2)
    console.log(`a let num1 tem o menor valor, ${num1} ao quadrado ${quadrado}`);
}
if (menorNum2 === true) {
    let quadrado2 = Math.pow(num2, 2)
    console.log(`a let num2 tem o menor valor, ${num2} ao quadrado é ${quadrado2}`);

}
if (menorNum1 === false) {
    let raiz = Math.sqrt(num1)
    console.log(`a let num1 tem o maior valor, a raiz de ${num1} é ${raiz}`);
}
if (menorNum2 === false) {
    let raizValorDois = Math.sqrt(num2)
    console.log(`a let num2 tem o maior valor, a raiz de ${num2} é ${raizValorDois}`);
}