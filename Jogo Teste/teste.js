// Banco de palavras do jogo
const bancoPalavras = [
    { palavra: "PYTHON", dica: "Linguagem de programação", vip: "O nome foi inspirado em um grupo de comédia britânico (Monty...)" },
    { palavra: "XICARA", dica: "Objeto de cozinha", vip: "Usada frequentemente para beber café ou chá quente" },
    { palavra: "COMPUTADOR", dica: "Dispositivo eletrônico", vip: "Possui componentes chamados CPU e Memória RAM" },
    { palavra: "MELANCIA", dica: "Fruta grande", vip: "Tem a casca verde, por dentro é vermelha e cheia de sementes" },
    { palavra: "BATMAN", dica: "Super-herói famoso", vip: "Ele não tem superpoderes e protege a cidade de Gotham" }
];

let jogoAtual = {};
let vidas = 5;
let letrasDescobertas = [];
let letrasTentadas = [];
let jogoAtivo = true;

// Inicializa uma nova partida
function iniciarJogo() {
    // Escolhe palavra aleatória do banco
    jogoAtual = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
    
    vidas = 5;
    letrasTentadas = [];
    jogoAtivo = true;
    
    // Cria array de traços correspondente ao tamanho da palavra
    letrasDescobertas = Array(jogoAtual.palavra.length).fill("_");

    // Resetar elementos da interface
    document.getElementById("texto-dica-inicial").innerText = jogoAtual.dica;
    document.getElementById("texto-dica-vip").innerText = jogoAtual.vip;
    document.getElementById("dica-vip").classList.add("hidden");
    document.getElementById("btn-dica-vip").classList.remove("hidden");
    document.getElementById("letras-tentadas").innerText = "-";
    document.getElementById("mensagem").innerText = "";
    document.getElementById("mensagem").className = "mensagem";
    document.getElementById("btn-reiniciar").classList.add("hidden");
    
    // Habilitar inputs
    document.getElementById("input-letra").disabled = false;
    document.getElementById("input-aposta").disabled = false;

    atualizarInterface();
}

// Atualiza o display visual das informações
function atualizarInterface() {
    document.getElementById("palavra-display").innerText = letrasDescobertas.join(" ");
    document.getElementById("contador-vidas").innerText = vidas;
    document.getElementById("visual-vidas").innerText = "❤️".repeat(vidas) + "🖤".repeat(5 - vidas);
    document.getElementById("letras-tentadas").innerText = letrasTentadas.join(", ") || "-";
}

// Evento do botão para revelar dica VIP
function revelarDicaVip() {
    if (!jogoAtivo) return;
    document.getElementById("dica-vip").classList.remove("hidden");
    document.getElementById("btn-dica-vip").classList.add("hidden");
}

// Processa a tentativa de uma única letra
function jogarLetra() {
    if (!jogoAtivo) return;

    const input = document.getElementById("input-letra");
    const letra = input.value.toUpperCase().trim();
    input.value = ""; // Limpa campo
    input.focus();

    // Validações básicas da entrada
    if (!letra || letra.length !== 1 || !/[A-ZÁÉÍÓÚÂÊÔÇ]/.test(letra)) {
        exibirMensagemTemporaria("Digite uma letra válida!");
        return;
    }

    if (letrasTentadas.includes(letra)) {
        exibirMensagemTemporaria("Você já tentou essa letra!");
        return;
    }

    letrasTentadas.push(letra);

    // Verifica se a letra existe na palavra
    if (jogoAtual.palavra.includes(letra)) {
        for (let i = 0; i < jogoAtual.palavra.length; i++) {
            if (jogoAtual.palavra[i] === letra) {
                letrasDescobertas[i] = letra;
            }
        }
        verificarVitoria();
    } else {
        vidas--;
        verificarDerrota();
    }

    atualizarInterface();
}

// Processa o chute da palavra completa (Aposta Final)
function jogarAposta() {
    if (!jogoAtivo) return;

    const input = document.getElementById("input-aposta");
    const palpite = input.value.toUpperCase().trim();
    input.value = ""; // Limpa campo

    if (!palpite) {
        exibirMensagemTemporaria("Digite uma palavra para apostar!");
        return;
    }

    // Se acertar na aposta final, preenche tudo e vence
    if (palpite === jogoAtual.palavra) {
        letrasDescobertas = jogoAtual.palavra.split("");
        atualizarInterface();
        finalizarJogo(true, "🎉 Espetacular! Você acertou a Aposta Final!");
    } else {
        // Se errar a aposta final, perde todas as vidas imediatamente
        vidas = 0;
        atualizarInterface();
        finalizarJogo(false, `💥 Errou a aposta! O boneco foi enforcado. A palavra era: ${jogoAtual.palavra}`);
    }
}

function verificarVitoria() {
    if (!letrasDescobertas.includes("_")) {
        finalizarJogo(true, "🎉 Parabéns! Você descobriu a palavra!");
    }
}

function verificarDerrota() {
    if (vidas <= 0) {
        finalizarJogo(false, `💥 Fim de jogo! Você perdeu. A palavra era: ${jogoAtual.palavra}`);
    }
}

function finalizarJogo(ganhou, texto) {
    jogoAtivo = false;
    const msgElemento = document.getElementById("mensagem");
    msgElemento.innerText = texto;
    msgElemento.className = ganhou ? "mensagem ganhou" : "mensagem perdeu";
    
    // Trava inputs e mostra botão de reiniciar
    document.getElementById("input-letra").disabled = true;
    document.getElementById("input-aposta").disabled = true;
    document.getElementById("btn-reiniciar").classList.remove("hidden");
}

function exibirMensagemTemporaria(texto) {
    const msgElemento = document.getElementById("mensagem");
    msgElemento.innerText = texto;
    msgElemento.className = "mensagem";
    setTimeout(() => {
        if (jogoAtivo && msgElemento.innerText === texto) {
            msgElemento.innerText = "";
        }
    }, 2000);
}

// Atalho de teclado: Pressionar Enter no campo de letra aciona o botão
document.getElementById("input-letra").addEventListener("keypress", function(e) {
    if (e.key === "Enter") jogarLetra();
});

// Atalho de teclado: Pressionar Enter no campo de aposta aciona o botão
document.getElementById("input-aposta").addEventListener("keypress", function(e) {
    if (e.key === "Enter") jogarAposta();
});

// Inicializa ao carregar a página
window.onload = iniciarJogo;
