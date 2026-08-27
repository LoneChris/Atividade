//idade do sujeito
let idade = 15

console.log(`A pessoa possui ${idade} anos`)

// comando if que dirá o tipo de voto da pessoa pela idade
//se tiver menos de 16 anos
if (idade < 16) {
    console.log(`Ela não pode votar`)
}else
    //se tiver 16 ou 17, 70 ou mais
    if (idade <= 17 || idade >=70) {
        console.log(`Seu voto é facultativo`)
    }else
        //se tiver entre 18 e 69
        if (idade <= 69) {
            console.log(`Seu voto é obrigatório`)
        }