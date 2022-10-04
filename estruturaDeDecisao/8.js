//determinar se um num A é divisivel por um outro num B. Esses valores devem fornecidos pelo usuario 
let num1 = Number(prompt("digite um numero"))
let num2 = Number(prompt("digite outro numero"))
if ((num1 % num2) == 0){
    console.log("é divisivel");
}
else{
console.log("não é divisivel");
}