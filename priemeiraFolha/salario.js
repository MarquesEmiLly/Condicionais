// receber salario do funcionario 
// se o salario atual do funcionario for até 2.500 calcular o novo salario com percentual de aumento de 20% caso contrario, calcular o novo salario com percentual de aumento de 10%
//mostrar novo salario
let receber = 3000
let porcentagemJunior = 10 / 100
let porcentagemPLeno = 20 / 100
if (receber <= 2500) {
    console.log(receber + porcentagemPLeno);
}
else {
    console.log(receber + porcentagemJunior);
}
