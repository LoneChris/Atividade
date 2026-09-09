// * Campos de input
const expressao = document.getElementById('expressao')
const resultado = document.getElementById('resultado')

// * Botoes de cada operador
const adicao = document.getElementById('adição')
const subtracao = document.getElementById('subtração')
const multiplicacao = document.getElementById('multiplicacao')
const divisao = document.getElementById('divisao')

// * Evento ao clicar nos operadores
adicao.addEventListener('click', () => {
    expressao.value += '+'
    expressao.focus()
})

subtracao.addEventListener('click', () => {
    expressao.value += '-'
    expressao.focus()
})

multiplicacao.addEventListener('click', () => {
    expressao.value += '*' // O JavaScript usa * para multiplicação
    expressao.focus()
})

divisao.addEventListener('click', () => {
    expressao.value += '/' // O JavaScript usa / para divisão
    expressao.focus()
})
//.value é usado para ler o que o usuário digita em campos de formularios HTML
//+= pega o que já existe e acrescenta outra coisa
//.focus permite que o curso ainda esteja na barra de expressao


// *Função que calcula o resultado
function calcular() {
    try {
        // eval() resolve a expressão matemática digitada
        resultado.value = eval(expressao.value)
    } catch (erro) {
        resultado.value = "Erro"
    }
}
//try tenta executar a conta apresentada em 'expressao'
//catch executa um aviso caso aconteça um erro dentro do try

// *atalho para 'Enter' calcular() e o resutado ser apresentado
expressao.addEventListener("keypress", function(e) {
    if (e.key === "Enter") calcular()
})
//e em function(e) representa o evento que aconteceu(a tecla Enter sendo pressionada)
//e.key descobre a tecla pressionada
