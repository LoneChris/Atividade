//par ou impar
let n1 = 48

//nominal
console.log("\nFunção nominal")
function numero(n1){
    return n1 % 2
}
let resto = numero(n1)
if (resto == 0) {
    console.log(`O número ${n1} é par`)
}else{
    console.log(`O número ${n1} é impar`)
}


//anonima
console.log("\nFunção anonima")
let resul = function(n1){
    return n1 % 2
}
let rest = resul(n1)
if (rest == 0) {
    console.log(`O número ${n1} é par`)
}else{
    console.log(`O número ${n1} é impar`)
}


//arrow
console.log("\nFunção arrow")
let num = (n1)=>{
    return n1 % 2
}
let r = num(n1)
if (r == 0) {
    console.log(`O número ${n1} é par`)
}else{
    console.log(`O número ${n1} é impar`)
}