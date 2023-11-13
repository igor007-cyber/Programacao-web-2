let parMaioQue40 = function(value){
    return value % 2 === 0 && value >= 40
}

let listDeValores = [12,5,8,130,44,39,155,96]
let resultado = listDeValores.filter(parMaioQue40) // aqui ele vai passar só boleano

alert(resultado)

let numeros = [3,5,12]
let raizes = numeros.map(Math.sqrt)

alert(raizes)

alert([1,40,76,8].map(piece => piece + 1))

alert([0,1,2,3,4].reduce(function(acumulador,valorAtual,indice,array) {

    return acumulador + valorAtual
    
},10))  

const ingrediente = ['vinho','cebola', 'cogumelo']

let receita = ingrediente.reduce(
    (molho,item) => molho + " " + item, "molho de ") 

alert(receita)
    