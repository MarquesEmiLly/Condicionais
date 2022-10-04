//faça um programa que leia o nome e a data de nascimento de uma pessoa (dia mês e ano) e apos informe junto ao nome da pessoa quantos dias esta pessoa ja viveu. Para simplificar o calculo considere que todos os meses possuem 30 dias e todos os anos 365
function idade() {
  let anoNascimento = Number(prompt("ano que nasceu"));
  let mes =Number(prompt("digite o numero do mes que vc nasceu"));
  let dia =Number(prompt("qual dia vc nasceu?"));
  const mesEmDIas = mes * 30;
  const anoAtual = 2022;
  const diasDoAno = 365;
  const outubro = 10 * 30
  const novembro = 11 * 30
  const dezembro = 12 * 30
  const calculaAno = anoAtual - anoNascimento; // aqui temos a idade do user

  const anoEmDias = calculaAno * diasDoAno; //constante que calcula o dias de vida sem levar em consideração tempo de meses vivido
  const resultado = anoEmDias + mesEmDIas + dia
  if (mes === 10) {
    return resultado - outubro
  }
  if (mes === 11) {
    return resultado - novembro
  }
  if (mes === 12) {
    return resultado - dezembro
  }
    console.log(` então vc vivou por ${resultado} dias`);
} console.log(idade());