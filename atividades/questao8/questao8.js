/**

8. Crie um loop do...while que pede ao usuário para adivinhar um número entre 1 e 10 até
que ele acerte. Exiba uma mensagem de parabéns quando ele acertar.

 */


const adivinhar = Math.floor(Math.random()*10)

do {
    const palpite = parseInt(prompt('Divinhe o numero que eu to pensando:'))
    
    if (adivinhar == palpite) {
        alert('Voce acertou miseravi')
        break
    }else{
        alert('Errouuuu..Tente de noov')
    }


} while (true);