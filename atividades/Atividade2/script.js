let entradaAtual =  document.querySelector('.currentInput');
let respostaTela =  document.querySelector('answerScreen');
let butoes = document.querySelectorAll('button');
let apagar = document.querySelector('#erase');
let limpar = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

let valoresTelaTempoReal = []

limpar.addEventListener('click', () => {
    valoresTelaTempoReal = [''];
    respostaTela.innerHTML = 0;
    entradaAtual.className = 'currentInput';
    respostaTela.className = 'answerScreen';
    respostaTela.style.color = "rgba(150, 150, 150, 0.87)";
})

butoes.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!btn.id.match('erase')) {
            valoresTelaTempoReal.push(btn.value)
            entradaAtual.innerHTML = valoresTelaTempoReal.join('')

            if (btn.classList.contains('num_btn')) {
                respostaTela.innerHTML = eval(valoresTelaTempoReal.join(''))
            }
        }

        if (btn.id.match('erase')) {
            valoresTelaTempoReal.pop()
            entradaAtual.innerHTML = valoresTelaTempoReal.join('')
            respostaTela.innerHTML = eval(valoresTelaTempoReal.join(''))
        }

        if(btn.id.match('evaluate')){
            entradaAtual.className ='answerScreen'
            respostaTela.className = 'currentInput'
            respostaTela.style.color = 'white'
        }

        if (typeof eval(valoresTelaTempoReal.join('') == 'undefined')) {
            respostaTela.innerHTML = 0
        }
    })
});

let num = parseFloat('3 + 3')
console.log(num)