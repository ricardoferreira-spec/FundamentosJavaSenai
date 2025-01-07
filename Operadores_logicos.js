let idade = 25 //apesar se ser maior que 18
let temCarteira = false // não pode dirigir porque não tem a carteira

console.log(temCarteira && idade>=18) //&& ambas condições precisam ser verdadeiras para retornar verdadeiro
console.log(temCarteira || idade>=18) // || condição OU, sigfica que apenas uma condiçao precisa ser verdadeiro, mesmo sem a carteira pode dirigir
console.log(!temCarteira) // ! Esta condição inverte o valor da variável
