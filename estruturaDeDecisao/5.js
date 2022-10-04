//construir um algorotimo que leia dois números e efetue a adição. 
//Caso o valor somado seja maior que 20, este deverá ser apresentado somando-se a ele mais 8, caso o valor somado seja menor ou igual a 20, este devera ser apresentado subtraindo- se 5
let num1 = Number(prompt("digite um numero"))
let num2 = Number(prompt("digite outro numero"))
const soma = num1 + num2
if (soma > 20) {
    console.log(soma + 8);
}
if (soma <= 20) {
    console.log(soma - 5);
}