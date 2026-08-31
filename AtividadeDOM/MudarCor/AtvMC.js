//*3. Evento de Entrando na área do botão
botao.addEventListener("mouseenter", () => {
    botao.innerHTML = "Mouse na área"
    botao.style.backgroundColor = "rgb(255, 96, 122)"
    botao.style.color = "rgb(31, 19, 83)"

} )

//*4. Evento de Saida na área do botão
botao.addEventListener("mouseleave", () => {
    botao.innerHTML = "Clique em Mim"
    botao.style.backgroundColor = "pink"
    botao.style.color = "purple"

} )