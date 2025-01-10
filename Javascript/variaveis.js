//Strings podemos utilizar aspas duplas, aspas simples e craze
let nome = "Maria"
let sobrenome = 'Duarte'
let idade = 29
let profissao = "Motorista"
let ano = 1995
let saudacao = "A " + nome + " é " + profissao
let nomecompleto = `${nome} ${sobrenome}`
let namecompleto = nome + " " + sobrenome

console.log(idade)
console.log("A " + nome + " é " + profissao)
console.log(saudacao)
console.log(`Bem vinda, ${nome} ${sobrenome}`)
console.log(nomecompleto)
console.log(namecompleto)

// Number - será utilizado mais variáveis tipo INT e FLOAT. Exemplo 36.5
let temperatura = 36.5
let soma = 29+0.999
let subtracao = 2-1.9
let multiplicacao = 2.1*2.6
let divisão = 10.8/2

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisão)

//boolean - guardar valores verdadeiros e falsos
let estaChovendo = false
let estaSol = true

console.log(estaChovendo)
console.log(estaSol)

//Array
let frutas = ["Abacaxi", "Laranja", "Melancia", "Maçã"]
//let numeros = [1, 2, 3, 4, 5, 6] 
              // 0  1  2  3  4  5

console.log(frutas)
console.log(frutas[0]) // utilizando INdex ao array de frutas retornar o elemento 0
console.log(frutas[2]) // utilizando INdex ao array de frutas retornar o elemento 0
console.log(frutas.length)

frutas.push("Uva") //adiciona Uva ao final da lista frutas
frutas.shift() // Remover o primeiro elemento da lista frutas
frutas.pop() //Remove o ultimo elemento da lista frutas

console.log(frutas)
console.log(frutas[0])


// apresentar o resultado = [3, 4, 6, 7]
let numeros = [1, 2, 3, 4, 5, 6] 
            // 0  1  2  3  4  5
            
console.log(numeros)
numeros.pop() //Remove 6
numeros.pop() //Remove 5
numeros.push(6) // adiciona 6 novamente
numeros.push(7) // adiciona 7
numeros.shift() // remove 1
numeros.shift() // remove 2
console.log(numeros)
numeros[0] = 20
console.log(numeros)


//Objeto
let pessoa = {
    nome: "João", 
    sobrenome: "Duarte",
    idade: 28,
    estrangeiro: false,
    linguagens: ["Java", "Go", "Python", "Cobol", "C#"]  
}

console.log(`Nome: ${pessoa.nome}`)
console.log(`Sobrenome: ${pessoa.sobrenome}`)
console.log(`Idade: ${pessoa.idade}`)

// adicionando uma nova propriedade
pessoa.profissao = "Desenvolvedor"
console.log(pessoa)

// alterar propriedade idade
pessoa.idade = 27
console.log(pessoa)

// deletar propriedade linguagens
delete pessoa.linguagens
console.log(pessoa)


//Novo Objeto
let carro = {
    Marca: "Ford", 
    Modelo: "Fiesta",
    Ano: 2002  
}

console.log(carro)
// adicionando uma nova propriedade
carro.Cor = "prata"
console.log(carro)

// alterar propriedade cor
carro.cor = "Vermelho"
console.log(carro)

// deletar propriedade cor
delete carro.Modelo
console.log(carro)


//
let carros = [
    {marca: "Toyota", modelo:"Corolla"},
    {marca: "Honda", modelo:"Civic"},
    {marca: "Fiat", modelo:"Uno"}
]
console.log(carros) 
console.log(carros[1].modelo)
console.log(carros[2].modelo)


