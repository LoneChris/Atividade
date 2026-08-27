// Unidade e Preço de cada Item
let camisaUni = 3
let camisaP = 40.0

let calcaUni = 2
let calcaP = 80.0

let tenisUni = 1
let tenisP = 150.0

// Valor Total das Camisas
camisaTotal = camisaP * camisaUni
// Valor Total das Calças
calcaTotal = calcaP * calcaUni

// Valor Total das Compras
total = camisaTotal + calcaTotal + tenisP

// Media gasta por cada item
media = total / (camisaUni + calcaUni + tenisUni)
mediaF = media.toFixed(2)

//Impressão dos Resultados
console.log(`
    O Valor Total gasto nas camisas foi de R$${camisaTotal}
    O valor Total gasto nas Calças foi de R$${calcaTotal}
    A compra deu o Total de: R$${total}
    Valor médio gasto em cada item: R$${mediaF}
    `)