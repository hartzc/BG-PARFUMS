

const produtostopsellers = [
    { nome: "Cebolinha", imagem: "assets/masculinos/Cebola.webp" },
    { nome: "Le Male Elixir", imagem: "assets/decants/Le Male Elixir.jpg" },
    { nome: "Ultra Male", imagem: "assets/decants/Ultra Male.webp" },
    { nome: "La Vie Est Belle", imagem: "assets/decants/La Vie Est Belle.webp" },
    { nome: "Club de Nuit", imagem: "assets/decants/Club de Nuit.jfif" },
];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtostopsellers.forEach((produto) => {
        const card = document.createElement("a");
        card.href = "#";
        card.className = "produto-card";
        card.dataset.nome = produto.nome;

        const imagemContainer = document.createElement("div");
        imagemContainer.className = "produto-imagem";

        if (produto.imagem) {
            const img = document.createElement("img");
            img.src = produto.imagem;
            img.alt = `Foto do frasco do perfume ${produto.nome}`;
            imagemContainer.appendChild(img);
        } else {
            const placeholder = document.createElement("i");
            placeholder.className = "fa-solid fa-flask placeholder-icone";
            imagemContainer.appendChild(placeholder);
        }

        const nome = document.createElement("span");
        nome.className = "produto-nome";
        nome.textContent = produto.nome;

        card.appendChild(imagemContainer);
        card.appendChild(nome);

        if (produto.obs) {
            const obs = document.createElement("span");
            obs.className = "produto-obs";
            obs.textContent = produto.obs;
            card.appendChild(obs);
        }

        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", montarCardsProdutos);