const lampada = document.getElementById("lampada")
const botao = document.getElementById("bt-mudar")

// gera uma cor aleatoria na lampada
function gerarCor() {
    const letras = "0123456789ABCDEF"
    let cor = "#"
    for (let i = 0; i < 6; i++) {
        cor+= letras[Math.floor(Math.random() * 16)]
    }
    return cor
}

//*PARA MUDAR CONFORME VAI CLICANDO
// botao.addEventListener("click", () =>{
//     const novaCor = gerarCor()

//     lampada.style.backgroundColor = novaCor

//     lampada.style.boxShadow = `0 0 40px ${novaCor}, 0 0 80px ${novaCor}`
// } )

//*PARA LIGAR E DESLIGAR A LÂMPADA

let intervaloId = null
let piscando = false

//* muda a cor da lampada uma vez
function mudarCor() {
    const novaCor = gerarCor()
    lampada.style.backgroundColor = novaCor
    lampada.style.boxShadow = `0 0 50px ${novaCor}, 0 0 100px ${novaCor}`
}

//* desliga a lampada
function desligar(){
    lampada.style.backgroundColor = "rgb(179, 177, 177)"
    lampada.style.boxShadow = "rgba(0,0,0,0.3)"
}

//* evento clique no botão
botao.addEventListener("click", () => {
    if (!piscando) {
        // Se desligada, liga e muda de cor
        mudarCor()
        intervaloId = setInterval(mudarCor, 300)
        botao.textContent = "Desligar"
        piscando = true
    }else{
        //se ligada, para a mudança de cor e desliga
        clearInterval(intervaloId)
        desligar()
        botao.textContent = "Ligar"
        piscando = false
    }
} )