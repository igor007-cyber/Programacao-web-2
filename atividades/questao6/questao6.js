/* 
6. Peça ao usuário para confirmar se ele deseja continuar (sim ou não) usando o confirm.
Com base na resposta, exiba uma mensagem apropriada usando if/else.
*/

const resposta = confirm('Voce é maior de 18 anos?')

if (resposta == true) {
    alert('Seja bem vindo ao nosso barzinho')
}else{
    alert('Saia daqui que voce não é')
}