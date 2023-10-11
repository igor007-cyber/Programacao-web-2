/*

13. Crie um programa que calcule a média de 5 notas inseridas pelo usuário usando um
loop for.

*/
let nota = 0

for (let index = 0; index < 5; index++) {
    let soma = parseFloat(prompt(`Digite a nota ${1 + index}:`))
    nota = nota + soma
}
alert(`Sua media foi ${nota / 5}`)