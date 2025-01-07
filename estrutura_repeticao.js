//  %%%%%%%%%%%% for: estrutura de repetição.
//for(let i = 0; i < 5; i++){
  //  console.log(i)
//}

//for(let i = 1; i <=10; i++){
 //   console.log(i)
//}

//  %%%%%%%%%%%% incremento
//for(let i = 0; i <=10; i = i+2){
   // console.log(i)
//}

//  %%%%%%%%%%%% apresente o resultado da tabuada 2 conforme abaixo
//2x1 = 2
//2x2 = 4
//2x3 = 6

//for(let i = 0; i <=10; i++){
//    console.log("2 x " + i + " = " + 2*i)  /// posso utiliazar o + para concatenar 
//}

/////////  %%%%%%%%%%%% outra forma de fazer/apresentar o mesmo resultado da tabuada do 2  %%%%%%%%%%%%
//let numero = 2
//for(let i = 0; i <=10; i++){
  //  console.log(`${numero} x ${i} = ${i * numero}`)
//}

///////// %%%%%%%%%%% estrutura para repetir até o número 56 %%%%%%%%%%%%

//let numeroProdurado = 56 
//for(let i = 0; i<=100; i++){
   // if(i == numeroProdurado){
   //     break;
  //  }
  //  console.log(i)
//}

// let soma = 0 
// let numeroSoma = 100

// for(let i = 0; i <= 20; i++){
//     soma = soma + i

//     if(soma > numeroSoma){
//         console.log("Sua soma ultrapassou 100")
//         break;
//     }
//     console.log(soma)
// }

/////////%%%%%%%% como criar um for em uma lista  %%%%%%%%%%%%

// let cores = ["Vermelho", "Roxo", "Verde"]
// for(let i = 0; i < cores.length; i++){
//     console.log(cores[i]) // utiliza o indice para pegar a informação que esta na memoria, primeira vez o for pega o vermelho, soma 1, e assim por diante
// }

///////// %%%%%% uma forma mais elegante e mais simples de fazer a mesma coisa.  %%%%%%%%%%%%

// let cores = ["Vermelho", "Roxo", "Verde"]
// for(let cor of cores){
//     console.log(cor)
// }


/////////%%%%%%% estrutura para encontrar o maior número deste index %%%%%%%%%%%
/////////%%%%%%% se desejar encontrar o menor número dentro desta sequencia basta trocar o sinal > por < e alterar a resposta.
// let numeros2 = [200,100,40,50,90]
// let maior = 0

// for(let numero of numeros2){
//     if(numero > maior){
//       maior = numero
//     }
// }
//   console.log("O maior número é", maior) // caso seja alterado para menor trocar tambem a mensagem

/////////%%%%%% Exercicio: retornar a quantidade de caracteres de uma palavra
// let palavra = "Vermelho"
// for(let i = 0; i < palavra.length; i++){
//      console.log("A palavra tem " + palavra.length + " caracteres.") 
// }

/////////%%%%%% Exercicio: Neste exemplo retorna uma letra da palavra em cada linha
// let palavra = "Vermelho"
// for(let i = 0; i < palavra.length; i++){
//      console.log(palavra[i]) 
// }

/////////%%%%%% para descobrir se existe resto em uma divisão é utilizado %. Exemplo: console.log(2 % 2 === 0)
// for(let i = 0; i<= 10; i++){
//   if(i % 2 === 0){               // se na divisão por 2 o resto for 0, então o número razão é par
//     console.log(`${i} é par`)
//   }
// }

// for(let i = 0; i<= 10; i++){
//   if(i % 2 !== 0){               // a ! inverte a solicitação e na divisão por 2 o resto for <> 0, então o número razão é impar
//     console.log(`${i} é impar`)
//   }
// }

// for(let i = 0; i<= 10; i++){
//   if(i % 2 !== 0){               // a ! inverte a solicitação e na divisão por 2 o resto for <> 0, então o número razão é impar
//     console.log(i + 'é impar')   //posso usar + 
//   }
// }

// for(let i = 0; i<= 10; i++){
//   if(i % 2 !== 0){             // a ! inverte a solicitação e na divisão por 2 o resto for <> 0, então o número razão é impar
//     console.log(i, 'é impar')  //posso usar , virgula pois assim já adiciona o espaço
//   }
// }

////////// %%%%%%% Condição While - Primeiro pergunta e depois executa
// let num = 0
// while(true){                 // vai entrar nesta condição sempre que for true. Se for False nem vai entrar no While
//   console.log(num)           //control C para parar.
//   num++
// }

///////// %%%%%%% exercicio: incluir uma condição para o loop executar até o 10.
// let num = 0
// while(num <= 10){            // vai entrar nesta condição enquanto for <= que 10.
//   console.log(num)           //enquanto for menor ou igual a 10 vai apresentar o número.
//   num++                      // vai somar e voltar a executar o while
// }

///////// %%%%%%% Condição Do While - Primeiro executa e depois verifica a condição
// do{
//   console.log("Do while")    // executa
// } while (true)               // verifica condição se é verdadeiro

///////// %%%%%%% 1 Exercício: utilizando Do While executar um contador até 20
let contador = 0
do{
  console.log(contador)         // executa e apresenta o variável
  contador++                    // adiciona número ao contador
} while(contador<=20)           // verifica. Enquanto for <=20 volta para o Do.


///////// %%%%%%% 2 Exercício: Utilizando While mostre todos os números pares até o 50
let num = 0
while(num <= 50){                 //  vai entrar nesta condição enquanto for <= 50.
    if(num % 2 === 0){            //  se a divisão por 2 for igual a zero o número é par
      console.log(`${num} é par`) //  apresenta o resultado 
    }    
  num++                           //  soma contador e voltar a executar o while enquanto for <= 50
}
