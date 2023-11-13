const paragrafos = document.querySelector("p.hero")
console.log(paragrafos)
paragrafos.innerHTML = "<br>Deu certo!<br>"

const botao = document.createElement("button")

botao.innerHTML = ("ok")

paragrafos.appendChild(botao)

const link =  document.createElement("a")

link.innerHTML = paragrafos.getAttribute("class")
link.href = "https://www.msn.com/pt-br/dinheiro/economia-e-negocios/brasil-%C3%A9-l%C3%ADder-do-ranking-de-ataques-ddos-na-am%C3%A9rica-latina-pela-10%C2%AA-vez-entenda/ar-AA1iHO9c?ocid=msedgntp&pc=WSEDSE&cvid=e9a6b686dad2488293f11dd6380189e3&ei=10"

paragrafos.appendChild(link)

link.setAttribute("style", "font-size:26px")

let teste = document.getElementById('click')
teste.addEventListener('click',function(){alert('bom dia')})