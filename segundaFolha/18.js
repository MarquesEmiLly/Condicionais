//Faça um programa que receba o ano e nascimento de uma pessoa e o ano atual, calcule e mostre:
//a) a idade desta pessoa 
//b) quantos anos ele tera em 2050;
let nascimento = Number(prompt("DIGITE O ANO QUE VC NASCEU"));
let anoAtual = Number(prompt("digite o ano atual"));
const calculaIdade = anoAtual - nascimento;
const calculaFuturo = 2050 - anoAtual
const idadeFuturo = calculaIdade + calculaFuturo
console.log(`você tem ${calculaIdade} anos de vida`);
console.log(`em 2050 vc tera ${idadeFuturo}`);

