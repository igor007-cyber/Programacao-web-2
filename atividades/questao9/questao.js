/*
9. Peça ao usuário para inserir um número usando o prompt e armazene-o em uma
variável. Verifique se o número é positivo, negativo ou zero e exiba uma mensagem
correspondente usando if/else.
*/

const numero  = parseFloat(prompt('Digite um numero:'))

if (numero > 0) {
    alert(`Seu numero ${numero} é positivo`)
} else if(numero < 0){
    alert(`Seu numero ${numero} é negativo`)
}else{
    alert(`Seu numero ${numero} é igual a zero`)
}