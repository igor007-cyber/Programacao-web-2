/*
5. Crie uma função chamada "soma" que recebe dois números como argumentos e retorna
a soma deles. Em seguida, use um prompt para obter dois números do usuário, chame a
função e exiba o resultado em um alert.

*/


const numero1 = parseFloat(prompt('Digite um numero:'))
const numero2 = parseFloat(prompt('Digite outro numero:'))

alert(`A soma dos numeros ${numero1} + ${numero2} = ${soma(numero1,numero2)}`)


function soma(num1, num2){
    return num1 + num2
}
