//receba salario de um funcionario, calcule e mostre o salario a receber sabendo se que o funcionario tem gratificação  de 5% sobre o salario base e ´paga imposto  de 7% sobre  salario com a gratificação 
let salario = Number(prompt('quantia do seu salario'))
let gratificacao = 5 / 100
let imposto = 7 / 100
const calcula = salario + gratificacao - imposto
return `salario com gratificação e desconto de impostos ${calcula}`