//informe o valor do produto , se o pagamento for a vista 10% de desconto em duas paarcelas valor da etiqueta mesmo e em quatro parcelas 5% de acrescimo
function lojinha(etiqueta) {
    let avista = 10 / 100
    let quatroparcelas = 5 / 100
    let pagamento = prompt("forma de pagamento")

    if (pagamento === 'a vista') {
        return etiqueta - avista
    }
    if (pagamento === ' duas parcelas') {
        return etiqueta
    }
    if (pagamento === 'quatro parcelas') {
        return etiqueta + quatroparcelas
    }
}
console.log(lojinha(50));