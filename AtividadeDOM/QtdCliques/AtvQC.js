const botao = document.getElementById("meuBotao");
const contadorSpan = document.getElementById("contador")

let qtdCliques = 0

botao.addEventListener("click", () => {
    qtdCliques++
    contadorSpan.textContent = qtdCliques
})