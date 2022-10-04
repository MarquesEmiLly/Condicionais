//receba um num e imprima uma das mensagens "é multiplo de 3" ou "não é multiplo de 3"
let num = Number(prompt("digite um numero")) 
if(num % 3 === 0 ){
    console.log("é divisivel por tres");
}
else {
    console.log("não é divisivel por tres");
}