let total = 0
const numeros = [10,10,10,4]
for (var i = 0; i < numeros.length; i++) {
    total += numeros[i]
}
//console.log(total);
const media = total / numeros.length
if (media > 7) {
    console.log(`Aprovada com ${media} pontos`)
}
else {
    console.log(`${media} REPROVADA`);
}
