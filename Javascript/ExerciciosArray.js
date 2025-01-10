
/*1. Transforme o array abaixo em um novo array contento o dobro de cada número 
    - Entrada [1, 2, 3, 4, 5]
    - Resultado [2, 4, 6, 8, 10]
*/
    let numeros = [1,2,3,4,5]
    let Dobro = numeros.map(nx => nx * 2);              // transforma a lista pela condição informada = dobro da lista: [ 2, 4, 6, 8, 10 ]
    console.log(Dobro)

/*2. Filtre apenes os numeros pares do array abaixo
    - Entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    - Resultado [2, 4, 6, 8, 10]
*/
    let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let filtraPar = numeros2.filter(n => n % 2 === 0);  // pesquisa no array todos os numeros pares [ 2, 4, 6, 8, 10 ]
    console.log(filtraPar)

/*3. Encontre o primeiro maior numero maior que 50 no array abaixo
    - Entrada [10, 25, 47, 58, 62, 79]
    - Resultado: 58
*/
    let numeros3 = [10, 25, 47, 58, 62, 79]
    let primeiro = numeros3.find(n => n > 50)           // pesquisa no array o primeiro numero maior que 50 = 58
    console.log(primeiro)

/*4. Verifique se existe pelo menos um número negativo
    - Entrada [10, -5, 7, 0, -3]
    - Resultado: true
*/
    let numeros4 = [10, -5, 7, 0, -3]
    let negativo = numeros4.filter(n => n<0)            // filtra no array os numeros < 0 = [ -5, -3 ]
    console.log(negativo)

/*5. Verifique se todos os numeros do array são maiores que 2
    - Entrada [1, 2, 3, 4, 5]
    - Resultado: false
*/    
    let numeros5 = [1, 2, 3, 4, 5]
    let maiorQ2 = numeros5.filter(n => n >2);           //filtra os numeros do array maior que 2
    console.log(maiorQ2)


/*6. Imprima no terminal a posição (index) de cada elemento no array abaixo
    - Entrada [10, 20, 30, 40, 50]
    - Resultado: 
        O numero: 
            O numero 10 está na posição 0
            O numero 20 está na posição 1
            O numero 30 está na posição 2
            O numero 40 está na posição 3
            O numero 50 está na posição 4
*/
    let numeros6 = [10, 20, 30, 40, 50]
    let listarPosicao = numeros6.forEach((numeros6, INdex) => console.log(numeros6, INdex))

/*7. Verifique se o numero 7 esta presente no array
    - Entrada [1, 3, 5, 7, 9, 10]
    - Resultado: true
*/
    let numeros7 = [1, 3, 5, 7, 9, 10]
    let existeONumero7 = numeros7.includes(7)    //verificar se existe o número 7 no array/lista [1,2,3,4]
    console.log(existeONumero7)

    