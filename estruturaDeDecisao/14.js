//informe se os numeros são divisiveis por 10, por 5 ou por 2 ou se não é divisivel por nehum deles

let num1 = Number(promp("digite um namoro"))
const dividePorCinco = num1 % 5
const verificaDivisao = dividePorCinco === 0 ? true : false

const divideporDez = num1 % 10
const verficaDivisao2 = divideporDez === 0 ? true : false

const dividePorDois = num1 % 2
const verficaDivisao3 = dividePorDois === 0 ? true : false

/*
const resto = numero % 2; 
    if (resto == 0) { */