/*

16. Crie um programa que simule um jogo de adivinhação. Escolha um número aleatório
entre 1 e 100 e peça ao usuário para adivinhar o número usando prompts. Forneça dicas
(maior ou menor) e conte quantas tentativas foram necessárias para acertar


*/
const numero  = parseInt(prompt('Digite um numero que eu to pensando:'))
const adivinha = Math.floor(Math.random()*100)

while(true){
    if (numero == adivinha) {
        alert("voce acertou")
        break
    }else if(numero > adivinha){
        alert("O é menor, tente de novo")

    }else{
        alert("O é maior, tente de novo")
    }
}
