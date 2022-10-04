let cateto1 = Number(prompt('valor do cateto'))
let cateto2 = Number(prompt("valor do cateto oposto"))
const quadrado = Math.pow(cateto1, 2);
const quadrado2 = Math.pow(cateto2, 2);
let h = quadrado + quadrado2
const formula = Math.sqrt(h)
console.log(formula); 