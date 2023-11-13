let w = window.innerWidth;
let h = window.innerHeight;
let x = document.getElementById("ex")

x.innerHTML = "Largura " + w + "<br>" + "Altura: " + h;

let novaJanela;

function AbrirJanela() {
    novaJanela = window.open("https://www.google.com.br/", "novaJanela", "width=200", "heigth=200")
   // novaJanela.document.write("<p>Uma nova janela foi criada</p>")
}

function FecharJanela() {
    novaJanela.close();
}

//criando um construtor
let user = new Object()
let user1 = {}

let usuario = {
    name: "igor",
    age: 25
}

console.log(usuario.name)
console.log(usuario.age)

usuario.isProfessor = "ddddd"
console.log(usuario.isProfessor) // aqui ja adiciona
usuario['is teaching now'] = true


alert(usuario.isAdmin)


//Criando Metodos

let cadastro = {
    name:"igor",
    age: 25,
    getAge: function(){
        return this.age;
    },
    setAge: function(newAge){
        this.age = newAge;
    }
}
