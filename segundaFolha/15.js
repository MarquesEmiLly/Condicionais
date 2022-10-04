//faça um programa que solicite um número positivo e maior que zero, calcule e mostre: 
//a) o número digitado ao quadrado 
//b) o numero digitado ao cubo 
//c) a raiz quadrada do numero digitado
//d) a raiz cubica do numero digitado


//a) 
let num =Number(prompt("digite um numero maior que zero"))
const quadrado = Math.pow(num, 2)
console.log(`${num} ao quadrado é ${quadrado}`);

//b) 
const cubo = Math.pow(num, 3)
console.log(`${num} ao cubo é ${cubo}`); 

//c)
const raiz = Math.sqrt(num)
console.log(`a raiz quadrada de ${num} é ${raiz.toFixed(2)}`);

//d) 
const raizCubica = Math.cbrt(num)
console.log(`raiz cubica de ${num} é ${raizCubica.toFixed(2)}`);