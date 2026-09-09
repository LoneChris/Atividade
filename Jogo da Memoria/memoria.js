//Imagens das cartas
const cartas = [
    "cartas/conhecimentoSimbolo.jpg",
    "cartas/energiaSimbolo.jpg",
    "cartas/medoSimbolo.jpg",
    "cartas/morteSimbolo.jpg",
    "cartas/ordoRealitas.jpg",
    "cartas/outroLado.jpg",
    "cartas/sangueSimbolo.jpg",
    "cartas/tenebris.jpg"
]
//Cada carta possui um par (16 cartas no total)
let cartasJogo = [...cartas, ...cartas]

const containerCartas = document.getElementById("cartas")
const reset = document.getElementById("reset")

let primeiraCarta = null //primeira carta que o jogador clicou
let segundaCarta = null //segunda carta que o jogador clicou
let bloqueiaTabuleiro = false //impede o jogador de continuar clicando


// Embaralhar o Array utilizando a função fisher-yates
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1))
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

//Criar o Tabuleiro
function criarTabuleiro() {
    //limpa cartas já existentes
    containerCartas.innerHTML = ""

    //cria pares
    cartasJogo = [...cartas , ...cartas]

    //embaralha
    embaralhar(cartasJogo)

    //cria cada carta
    cartasJogo.forEach((imagem) => {

        const carta = document.createElement("div")
        carta.classList.add("card")

        //frente da carta
        const frente = document.createElement("div")
        frente.classList.add("card-face", "card-front")

        //imagem
        const img = document.createElement("img")
        img.src = imagem
        console.log(img.src)
        img.alt = "Carta do Jogo da Memória"

        frente.appendChild(img)

        //verso da carta
        const verso = document.createElement("div")

        verso.classList.add("card-face" , "card-back")

        //simbolo no verso
        verso.textContent = "MEDO"

        //aplicar frente e verso na carta
        carta.appendChild(frente)
        carta.appendChild(verso)

        //guarda qual imagem pertence a qual carta
        carta.dataset.imagem = imagem

        //quando clicar
        carta.addEventListener("click", virarCarta)
        //coloca a carta no tabuleiro
        containerCartas.appendChild(carta)

    })

}

//Virar a carta ao ser clicada
function virarCarta() {
    //Se tabuleiro estiver bloqueado, não deixa clicar
    if (bloqueiaTabuleiro){
        return
    }
    //não deixa clicar na mesma carta
    if (this === primeiraCarta){
        return
    }
    //não deixa clicar em cartas já acertadas
    if (this.classList.contains("matched")){
        return
    }

    //vira a carta
    this.classList.add("flipped")
    //se for a primeira
    if (primeiraCarta === null){
        primeiraCarta = this
        return
    }
    //temos duas carta
    segundaCarta = this
    //verificar se são iguais
    verificarPar()
}

//Verificar se as cartas são iguais
function verificarPar() {
    const saoIguais = primeiraCarta.dataset.imagem === segundaCarta.dataset.imagem

    if (saoIguais){
        //marcada como encontradas
        primeiraCarta.classList.add("matched")
        segundaCarta.classList.add("matched")
        //reseta seleção
        resetarEscolha()
    }else{
        //bloqueia as cartas
        bloqueiaTabuleiro = true
        //espera um tempo antes de desvirar
        setTimeout(() =>{
            primeiraCarta.classList.remove("flipped")
            segundaCarta.classList.remove("flipped")

            resetarEscolha()
        }, 1000)
    }
}

//reseta a escolha das cartas
function resetarEscolha() {
    primeiraCarta = null
    segundaCarta = null
    bloqueiaTabuleiro = false
}

//botão tentar novamente
reset.addEventListener("click", criarTabuleiro)

// iniciar jogo
criarTabuleiro()