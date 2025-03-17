   //AMIGO SECRETO
let nomesAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    nomesAmigos.push(nomeAmigo);
    document.getElementById("amigo").value = "";
    exibirListaAmigos();
}

function exibirListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    nomesAmigos.forEach(nome => {
        let itemLista = document.createElement("li");
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    if (nomesAmigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomesAmigos.length);
    let amigoSorteado = nomesAmigos[indiceSorteado];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    let itemResultado = document.createElement("li");
    itemResultado.textContent = "Amigo sorteado: " + amigoSorteado;
    resultadoLista.appendChild(itemResultado);
}