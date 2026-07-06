

const produtostopsellers = [
    { nome: "Cebolinha", imagem: "assets/masculinos/Cebola.jpg" },
    { nome: "Le Male Elixir", imagem: "assets/decants/Le_Male_Elixir.jpg" },
    { nome: "Ultra Male", imagem: "assets/decants/Ultra_Male.webp" },
    { nome: "La Vie Est Belle", imagem: "assets/decants/La_Vie_Est_Belle.webp" },
    { nome: "Club de Nuit", imagem: "assets/masculinos/Club_de_Nuit.jpg" },
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