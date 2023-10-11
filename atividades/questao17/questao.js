/*

17. Crie um programa que calcule o fatorial de um número inserido pelo usuário usando um
loop for.


*/
let numero = parseInt(prompt('Digite um numero:'))
let resultado = 1
while (numero > 1) {
      resultado = resultado * numero
      numero--
}
alert(resultado)