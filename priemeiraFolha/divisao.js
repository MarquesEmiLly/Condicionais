//receber o numerador da divisão 
function divide(numerador) { 
let denominador = prompt('qual o denominador da divisão')
if(denominador === 0 || denominador < 0){
prompt('escolha outro denominador')
}
return numerador / denominador
}
console.log(divide(10));
//receber denominador da divisão
// se o denominador for igual a zero, recber novamente o denominador da divisão

//dividir o numerador pelo denominador e mostrar o resultado.