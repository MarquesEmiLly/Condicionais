//receber 4 notas e fazer media arimetica
//se a media arimetica for igual ou superior a 7 informar que o aluno esta APROVADO 
//maior ou igual a 4 esta em exame
//menor que 4 informar que o aluno esta REPROVADO.

const nota = [1, 0, 10, 6]
const arimetica = nota.reduce(myFunc) / nota.length
function myFunc(total, num) {
    return total + num;
}

console.log(`nota final: ${arimetica}`);
if (arimetica >= 7) {
    console.log('APROVADO');
 }
 if(arimetica >= 4 && arimetica < 7){
    console.log('CHAMADO PARA PROVÃO');
 }
 if(arimetica< 4){
console.log('REPROVADO');
 }