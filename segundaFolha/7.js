// 7- receba salario de um funcionario , calcle e mostre o novo salario aumentando 20%
//8- mostre o valor de aumento
const funcionario = (dias) => {
    let salario = dias * 2
    let calcula = 20 / 100
    let extra = salario + calcula
    return `salario total ${extra} ---- porcentagem a mais ${calcula}`
}
console.log(funcionario(200));
