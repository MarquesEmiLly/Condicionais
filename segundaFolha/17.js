
let pe =Number(prompt("medida do pé"))

//  a) converter medida do pé em polegada (1 pé é 1 * 32 polegadas)

const polegadasPorPe = 12
console.log(pe * polegadasPorPe.toFixed(2));


// b) medida de convertida em jardas

const jardas = pe * 3
console.log(pe * jardas.toFixed(2));

//c) converter medida de pé em milhas 

const milhas = jardas * 1760
console.log(pe * milhas.toFixed(2));
