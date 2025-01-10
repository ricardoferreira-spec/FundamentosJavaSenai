
let numeros = [1,2,3,4]

// Map() cria uma novo array transformando os elementos
// Criar uma nova lista com o dobro dos valores[2,4,6,8]
let numerosDobro = numeros.map(nx => nx * 2);
console.log(numerosDobro)

// Find() Retorna o primeiro elemento que satisfaz a condição
let primeiro = numeros.find(n => n > 2) //retorna o primeiro número que satisfaz a condição n > 2 ou seja o número 3
console.log(primeiro)

let nomes = ["Andre", "Angelica", "Natalia", "matheus"]
let primeiroComT = nomes.find(nome => nome.includes("t"))
console.log(primeiroComT)

// Filter() Cria um novo array com elementos que satisfaçam a condição
let maioresQ3 = numeros.filter(n => n>3) // retorna os numeros que sejam maiores que 3 ou seja o número 4
console.log(maioresQ3)

let maioresQ1 = numeros.filter(n => n>1) // retorna os numeros que sejam maiores que 1 ou seja o número 2,3,4
console.log(maioresQ1)

// includes() verifica  se o numero existe na array
let existeONumero5 = numeros.includes(5)    //verificar se existe o número 5 no array/lista [1,2,3,4]
console.log(existeONumero5)

// Some() Verifica se um elemente satisfaz a condição
let existeAlgumPar = numeros.some( n=> n % 2 === 0 )
console.log(existeAlgumPar)

// ForEach() igual um For normal
let listarNomes = nomes.forEach((nome) => console.log(nome))
let listarNomess = nomes.forEach((nome, INdex) => console.log(nome, INdex))