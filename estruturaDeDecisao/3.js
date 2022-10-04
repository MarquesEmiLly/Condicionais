//construa um algoritimo que determine (imprima) se um dado numero N inteiro , recebido atraves do teclado, é PAR ou ÍMPAR
let num = Number(prompt("digite um número inteiro")) 
const total = num / 2;
if(num % 2 === 0) {
    console.log("par");
}
else{
    console.log("impar");
}