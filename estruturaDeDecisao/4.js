//escreva um algoritimo  para determinar se um dado numero N recebido através do teclado é positivo , negativo ou nulo
let num = Number(prompt("digite um numero"))
if (num < 0) {
    console.log("numero é negativo");
}
if (num > 0) {
    console.log("numero positivo");
}
if(num === 0){
    console.log("este numero é nulo");
}