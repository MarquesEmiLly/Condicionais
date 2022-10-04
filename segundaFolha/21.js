// receba uma hora (uma variavel para hora e outra para minutos)
//calcule e mostre :
//a) a hora digitada convertida em minutos
//b) o total dos minutos, ou seja, os minutos digitados mais a conversão anterior
//c) o total dos minutos convertidos em segundos
let hora = Number(prompt("digite a hora"))
let min = Number(prompt("digite os minutos"))

//a) 
const horaEmMin = hora * 60
console.log(`horas em minutos ${horaEmMin}`);

//b)
const totalMinutos = horaEmMin + min
console.log(`total de minutos ${totalMinutos}`);
//c) 
const converteEmSegundos = totalMinutos * 60
console.log(` total de segundos ${converteEmSegundos}`);