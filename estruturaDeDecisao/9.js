//construa um algoritimo que imprima qual o menor e qual o maior valor de dois numeros A e B, lidos através do teclado
let A = Number(prompt("digite um numero"))
let B = Number(prompt("digite um outro numero"))
if (A > B) {
    console.log(`${A} é maior do que ${B}`);
}
if (B > A){
    console.log(`${B} é maior do que ${A}`);
}