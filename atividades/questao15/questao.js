/*

15. Crie um loop for que exiba a tabuada de multiplicação de um número inserido pelo
usuário usando prompt.

*/
const numero  = parseFloat(prompt('Digite um numero para fazer a tabuada digitado:'))

for (let index = 0; index < 11; index++) {
    console.log(`${numero} x ${index} = ${numero * index}`) 
}

