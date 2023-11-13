/*

11. Crie uma função chamada "maiorNumero" que recebe três números como argumentos e
retorna o maior deles. Use prompt para obter três números do usuário, chame a função e
exiba o resultado em um alert.


*/
const numero1  = parseFloat(prompt('Digite um numero:'))
const numero2  = parseFloat(prompt('Digite outro numero:'))
const numero3  = parseFloat(prompt('Digite outro numero:'))

alert(maiorNumero(numero1,numero2,numero3))

function maiorNumero(num1,num2,num3) {
   const resultado = Math.max(num1,num2,num3)
   return resultado
}