// soma dois numeros, se o resultado for maior 50 apresenta-lo
let num1 = Number(prompt("digite um número"))
let num2 = Number(prompt("digite outro número"))
const soma = num1 + num2
switch (soma >= 50) {
    case true:
        console.log(`${num1} + ${num2} é = ${soma}`);
        break;
}
/*
outra forma de fazer 

const soma = num1 + num2
if(soma >= 50){
    console.log(`${num1} + ${num2} é = ${soma}`);
}*/
