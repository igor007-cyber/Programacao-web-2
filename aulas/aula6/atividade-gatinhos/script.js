const buscarGatinhos = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const cats = JSON.parse(xhr.responseText);
                cats.forEach(cat => {
                    const img = document.createElement('img');
                    img.src = cat.url;

                    const dimensoes = `Dimensões: ${cat.width} x ${cat.height}`;
                    const dimensaoTexto = document.createTextNode(dimensoes);
                    const p = document.createElement('p');
                    p.appendChild(dimensaoTexto);

                    const Gatinho = document.querySelector('#gatinhos');
                    Gatinho.appendChild(img);
                    Gatinho.appendChild(p);
                });
            } else {
                alert('Erro na requisição');
            }
        }
    };
    xhr.send();
};

const btnMostrar = document.querySelector('#mostrar-gatinhos');
btnMostrar.addEventListener('click', buscarGatinhos);
