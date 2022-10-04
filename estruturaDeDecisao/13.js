// dados tres valores A B C, construa um algoritimo que mostre os valores de forma descendente
const valores = [1, 44, 98, 23, 3]
let ordena = valores.sort(function (a, b) {
    return b - a;
});
console.log(ordena);