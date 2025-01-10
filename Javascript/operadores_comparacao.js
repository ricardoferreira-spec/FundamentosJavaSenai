let x = 10
let y = 20
// Maior que
console.log(x>y)

//Menor que
console.log(x<y)

//Maior ou igual
console.log(x>=y)

//Menor ou igual
console.log(x<=y)

//Igual
console.log(10 == "10")
console.log(10 === "10") //para evitar de comparar int com string coloco mais um igual para ficar restrito ao tipo de variável

//Diferente
console.log(10!==20)

//Se o sinal verde exiba "Pode passar"
//Se for amarelo exiba "Atenção"
//Se for vermelho exiba "Não pode passar"
let corSemaforo = "azul" // amarelo, vermelho

if (corSemaforo == "verde"){
    console.log("Pode passar")
} else if(corSemaforo == "amarelo") {
    console.log("Atenção") 
} else if(corSemaforo == "vermelho") {
    console.log("Não pode passar")
} else {
    console.log("Erro: cor inválida")
}

// verificar se um número é positivo, negativo ou zero
//retorna "o número é positivo" ou "negativo" ou "zero"
let numero = 1
if (numero<0){
    console.log("o número é Negativo")
} else if(numero == 0) {
    console.log("o número é Zero") 
} else { /// ou } else {
    console.log("o número é Positivo")
}


//exibir a faixa etaria
//se a pessoa nasceu entre 1946 e 1964: Baby boomer
//se a pessoa nasceu entre 1965 e 1980: Geração X
//se a pessoa nasceu entre 1981 e 1996: Millennial
//se a pessoa nasceu entre 1997 e 2012: Geração Z
//se a pessoa nasceu entre 2013: Geração alpha

let faixa = 1935
if (faixa<=1945){
    console.log("Não classificado")
} else if(faixa>=1946 && faixa <=1964) {
    console.log("Baby boomer") 
} else if(faixa>=1965 && faixa <=1980) {
    console.log("Geração X") 
} else if(faixa>=1981 && faixa <=1996) {
    console.log("Millennial")
} else if(faixa>=1997 && faixa <=2012) {
    console.log("Geração Z")
} else {
    console.log("Geração alpha")
}