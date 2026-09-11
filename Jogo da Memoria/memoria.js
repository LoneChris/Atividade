// Imagens das cartas
const cartas = [
    "cartas/conhecimentoSimbolo.jpg",
    "cartas/energiaSimbolo.jpg",
    "cartas/medoSimbolo.jpg",
    "cartas/morteSimbolo.jpg",
    "cartas/ordoRealitas.jpg",
    "cartas/outroLado.jpg",
    "cartas/sangueSimbolo.jpg",
    "cartas/tenebris.jpg"
];

// Cada carta possui um par (16 cartas no total)
let cartasJogo = [...cartas, ...cartas];

const containerCartas = document.getElementById("cartas");
const reset = document.getElementById("reset");

let primeiraCarta = null;
let segundaCarta = null;

let bloqueiaTabuleiro = false;


// Embaralhar o Array utilizando a função Fisher-Yates
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); //Escolhe uma posição aleatoria
        [array[i], array[j]] = [array[j], array[i]] //troca duas cartas de lugar
    }
    return array
}
//A função Fisher-Yates pega cada carta, começando pela última,
// escolhe uma posição aleatória e troca as duas cartas de lugar,
// repetindo isso até o array inteiro estar embaralhado.


// Criar o Tabuleiro
function criarTabuleiro() {

    // Limpa cartas já existentes
    containerCartas.innerHTML = ""

    // Cria os pares
    cartasJogo = [...cartas, ...cartas]

    // Embaralha
    embaralhar(cartasJogo)


    // Cria cada carta
    cartasJogo.forEach((imagem) => {
        const carta = document.createElement("div") //cria um <div>
        carta.classList.add("card") //<div> recebe a classe de "card" no html

        // Frente da carta
        const frente = document.createElement("div")
        frente.classList.add("card-face", "card-front")

        // Imagem
        const img = document.createElement("img")
        img.src = imagem
        console.log(img.src) //testa o caminho da imagem
        img.alt = "Carta do Jogo da Memória" //
        frente.appendChild(img)

        // Verso da carta
        const verso = document.createElement("div")
        verso.classList.add("card-face", "card-back")

        // Símbolo no verso
        verso.textContent = "?"

        // Aplica frente e verso na carta
        carta.appendChild(frente)
        carta.appendChild(verso)

        // Guarda qual imagem pertence à carta
        carta.dataset.imagem = imagem

        // Quando clicar
        carta.addEventListener("click", virarCarta)

        // Coloca a carta no tabuleiro
        containerCartas.appendChild(carta)

    } )
}



// Virar a carta ao ser clicada
function virarCarta() {

    // Se o tabuleiro estiver bloqueado
    if (bloqueiaTabuleiro) {
        return
    }

    // Não deixa clicar na mesma carta
    if (this === primeiraCarta) {
        return
    }

    // Não deixa clicar em cartas já acertadas
    if (this.classList.contains("matched")) {
        return
    }

    // Vira a carta
    this.classList.add("flipped")

    // Se for a primeira
    if (primeiraCarta === null) {
        primeiraCarta = this
        return
    }

    // Temos duas cartas
    segundaCarta = this

    // Verificar se são iguais
    verificarPar()
}


// Verificar se as cartas são iguais
function verificarPar() {
    const saoIguais =
        primeiraCarta.dataset.imagem === segundaCarta.dataset.imagem;
    if (saoIguais) {

        // Marca como encontradas
        primeiraCarta.classList.add("matched")
        segundaCarta.classList.add("matched")

        // Reseta seleção
        resetarEscolha()
    } else {
        // Bloqueia as cartas
        bloqueiaTabuleiro = true

        // Espera um tempo antes de desvirar
        setTimeout(() => {
            primeiraCarta.classList.remove("flipped")
            segundaCarta.classList.remove("flipped")
            resetarEscolha()
        }, 1000)
    }
}


// Reseta a escolha das cartas
function resetarEscolha() {
    primeiraCarta = null;
    segundaCarta = null;
    bloqueiaTabuleiro = false;
}


// Botão "Tentar Novamente"
reset.addEventListener("click", criarTabuleiro);

// Iniciar jogo
criarTabuleiro();