//a) o valor da hora trabalhada é 1/10 do salario salarioMinimo;

//b)o salario equivale ao numero de horas trabalhadas multiplicadao pelo valor da hora trabalhada;

//c) o imposto equivale a 3% do salario bruto ;

//d) o salario a receber equivale ao salario menos o imposto;

function calculaSalario(salarioMin) {
    let horas = 50 //prompt("horas trabalhadas")
    //a)
    const valorHoraTrabalhada = (salarioMin * 1.10) - salarioMin
   // return valorHoraTrabalhada.toFixed(2)
    //b) 
    const salario = horas * valorHoraTrabalhada
    // return salario
    //c) 
    const imposto = 3 / 100
    const descontaImposto = salario - imposto
    // return descontaImposto
//d)
}
console.log(calculaSalario(1200));