// Cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Cria um "Ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
        const titulo = frm.inTitulo.value // obtén os campos
        const duracao = Number(frm.inDuracao.value)

        const horas = Math.floor(duracao / 60) // arredonda para baixo resultado
        const minutos = duracao % 60 // obtén o resto da divisão

        resp1.innerText = titulo
        resp2.innerText = `${horas} horas e ${minutos} minutos`

        e.preventDefault()
    })
