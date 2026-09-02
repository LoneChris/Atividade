// palavras secretas
const bancoPalavras = [
    { palavra: "RPG", dica: "Jogo de Interpretação e Improviso", vip: "Uma sigla onde sua tradução é : Jogo de Interpretação de Papéis" },
    { palavra: "XICARA", dica: "Objeto de cozinha", vip: "Usada frequentemente para beber café ou chá quente" },
    { palavra: "COMPUTADOR", dica: "Dispositivo eletrônico", vip: "Possui componentes chamados CPU e Memória RAM" },
    { palavra: "MELANCIA", dica: "Fruta grande", vip: "Tem a casca verde, por dentro é vermelha e cheia de sementes" },
    { palavra: "BATMAN", dica: "Super-herói famoso", vip: "Ele não tem superpoderes e protege a cidade de Gotham" }
]

let jogoAtual = {}
let vidas = 5
let letrasDescobertas = []
let letrasTentadas = []
let jogoAtivo = true
// iniciar novo jogo
function iniciarJogo() {
    // palavra aleatoria
    jogoAtual = bancoPalavras[Math.floor(Math.random() * bancoPalavras)]

    vidas = 5
    letrasTentadas = []
    jogoAtivo = true

    // Array de traços correspondentes ao tamanho da palavra
    letrasDescobertas = Array(jogoAtual.palavra.length).fill("_")

    
}