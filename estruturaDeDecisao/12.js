//12 dados tres valores A B C, construa um algoritimo que mostre os valores de forma ascendente (do menor para o maior)
const valores = [1, 44, 98, 23, 3]
let ordena = valores.sort(function (a, b) {
    return a - b;
});
console.log(ordena);