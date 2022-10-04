//escreva um algorotimo que leia o valor unitário e a quantidade vendida de um produto e apresente o valor total da venda seja superior a R$100,OO mostrar a mensagem "bonificação de 10% para o vendedor"
const valorUnidade = 543
const quantidade = 5
const valorTotalVendas = valorUnidade * quantidade
if(valorTotalVendas > 100.00){
    console.log("bonificação de 10% para o vendedor");
}
console.log(`valor vendido até agora ${valorTotalVendas}`);