// cria referência
const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

// cria um evento
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    // calcular 
    const entrada = preco * 0.50;
    const parcela = (preco * 0.50)/12
     
    //exibe o valor
    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$: ${parcela.toFixed(2)}`

    e.preventDefault()
});