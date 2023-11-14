const getMarcas = () => {
    const tarefas =  fetch(`https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json`);

    tarefas
        .then(resposta => resposta.json())
        .then(marcas => {
            const ul = document.createElement('ul');
            marcas.forEach(marca => {
                const li = document.createElement("li");

                // Create an element for the brand name
                const NomeMarca = document.createElement('p');
                NomeMarca.textContent = marca.name;
                li.appendChild(NomeMarca);

                const logo = document.createElement('img');
                logo.src = marca.image?.optimized;
                li.appendChild(logo);

                ul.appendChild(li);
            });
            document.body.appendChild(ul);
        })
        .catch(erro => console.log(erro));
};

const btnMarcas = document.querySelector('#marcas');
btnMarcas.addEventListener('click', getMarcas);
