let bruto = Number(prompt('valor do salario bruto'))
let prestacao= Number(prompt("valor da prestação"))
let porcentagemSobreSalario = (bruto * 1.3) - bruto
console.log(porcentagemSobreSalario);
if(prestacao > porcentagemSobreSalario){
    console.log(false);
}

if(prestacao<= porcentagemSobreSalario){
    console.log(true);
}





