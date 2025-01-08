
// para salvar o arquivo automáticamente = >auto save + enter ou Ctrl+Shift+P

function funcaoBomDia() {
     console.log("Bom dia")
}
funcaoBomDia() // parentes é para executar a função

//%%%%%%%%%%%%%%%%%%%%% 
function funcaoSejaBemVindo(nome){      // passando um parametro na função
    console.log("Seja Bem Vindo", nome)
}
funcaoSejaBemVindo("Ricardo")           // parentes é para executar a função
funcaoSejaBemVindo("joão")              // parentes é para executar a função

//%%%%%%%%%%%%%%%%%%%%%  Crio a função que recebe 2 parametros
function soma(numero1, numero2){
    console.log(numero1 + numero2)  // Operação que sera executado com os 2 parametros
}
soma(2,6)                           // passo os 2 parametros 

//%%%%%%%%%%%%%%%%%%%%%  Crio a função para multiplicar 2 parametros
function multiplicar (numero1, numero2){
    console.log(numero1 * numero2)  // Operação que sera executado com os 2 parametros
}
multiplicar(2,6)                           // passo os 2 parametros 

//%%%%%%%%%%%%%%%%%%%%%  Criar a função verificar maioridade
function verificaMaiorIdade(idade){
    if(idade >=18){
        console.log("Maior de Idade")
    } else{
        console.log("Menor de Idade")
    }
}
verificaMaiorIdade(9)
verificaMaiorIdade(18)
verificaMaiorIdade(55)

//%%%%%%%%%%%%%%%%%%%%%  Crio a função que será passado como parametro
function divisao (n1, n2){
    return n1 / n2                  // a função retorna um resultado, e portanto quando a função for passado como parametro o retorno da função será o resultado dela
}
let resultado = divisao(10,5)       // declaro uma variável e passo a função divisão e os 2 parametros e o resultado será o retorno da função divisão
console.log(resultado)

//%%%%%%%%%%%%%%%%%%%%%  Subtração  declarando a função e seus parametros como variável.
let subtracao = function(n3,n4){    // declarando a função e seus parametros como variável.
    return n3 - n4
}
console.log(subtracao(10,3))        // passando função como parametro

//%%%%%%%%%%%%%%%%%%%%%  Exercicio 1 - Crie uma função chamada "calcularIdade" que recebe a idade e retorna o ano de nascimento
function calcularAnoNasc(Idade1){
    console.log(2024 - Idade1)  
}
calcularAnoNasc(55)                      

// outra forma de fazer
function calcularIdade(Idade4){
    return 2024 - Idade4
}
console.log(calcularIdade(55))            //informe a idade


//%%%%%%%%%%%%%%%%%%%%%  Exercicio 2 - Crie uma função chamada "calcularMedia" que recebe tres notas e retorna a média
function calcularMedia(n5, n6, n7){
    console.log((n5+n6+n7) / 3)  
}
console.log(calcularMedia(2,3,4))            

// outra forma de fazer
function calcularMedia(n5, n6, n7){
    return (n5+n6+n7) / 3
}
console.log(calcularMedia(2,3,4))        //informe os numeros

//%%%%%%%%%%%%%%%%%%%%%  Exercicio 3 - Crie uma função chamada "verificaParImpar" que recebe um número e retorna "Par" se o número for Par e "Impar" se o número for impar
function verificaParImpar(n8){
    if(n8 % 2 !== 0 ){
        return `impar`
    } else{
        return `Par`
    }
}
console.log(verificaParImpar(9))        //informe os números a ser verificado

// outra forma de fazer e simplificar
function verificaParImpar(numero){
    return numero % 2 == 0 ? "Par" : "Impar"
}
console.log(verificaParImpar(2))        //informe os números a ser verificado

//%%%%%%%%%%%%%%%%%%%%% 
let dobro = (numero) => numero * 2                // esta seta+maior(=>) = comando return. Substitui a escrita function
console.log(dobro(4))

