
let num = 4
let num1 = 2
let num2 = 8
let num3 = 2

//1- receba dois numeros calcule e mostre a subtrção
console.log(num - num1);

///2- multiplicar tres numeros 
console.log(num * num1 * num2);

//3-somar 4 numeros
console.log(num + num1 + num2 + num3);


//4- media arimetica de tres numeros
const array = [20, 20, 10]
const soma = array.reduce(somando)
const conta = array.length

function somando(valor, valor2) {
    return valor + valor2
}
const aritmetica = soma / conta
console.log(`media aritmetica da Emilly ${aritmetica.toFixed(1)}`);

/* outra maneira de fazer a atividade 4
const soma = num + num1 +num2
const media = soma / 3
console.log(soma);*/