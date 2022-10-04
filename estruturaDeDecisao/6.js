//escreva algorotimo que leia um num e imprima a raiz quadrada do num, caso ele seja postivo ou igual a zero; e o quadrado do numero caso ele seja negativo 
let num = Number(prompt("quero descobrir raiz quadrada do numero:"))
const raiz = Math.sqrt(num)
const quadrado = Math.pow(num, 2)
if (num >= 0) {
    console.log(raiz);
}
if (num < 0) {
console.log(quadrado);
}