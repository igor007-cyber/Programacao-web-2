/*
 Crie uma variável chamada "temperatura" e atribua a ela um valor numérico. Verifique se
a temperatura está acima de 30 graus Celsius e exiba uma mensagem correspondente
usando um if/else.

*/

const temperatura = parseFloat(prompt('Digite a temperatura da sua cidade:'))

if (temperatura > 30) {
    alert(`Essa temperatura ${temperatura} ta acima de 30 graus Celsius.Obs.: Ta muito calor`)
}else{
    alert(`Essa temperatura ${temperatura} ta abaixo de 30 graus Celsius. Obs.: Ta otimo`)
}

