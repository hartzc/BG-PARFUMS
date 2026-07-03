

const produtosMasculinos = [
    { nome: "Salvo" },
    { nome: "Opulent Dubai" },
    { nome: "Habik" },
    { nome: "Alpine Homme Sport" },
    { nome: "Fakhar Black" },
    { nome: "Fakhar Platinum" },
    { nome: "Club 6" },
    { nome: "Voyage" },
    { nome: "Ameerati" },
    { nome: "His Confession" },
    { nome: "Pisa" },
    { nome: "World Cup" },
    { nome: "Liquid Brun" },
    { nome: "Khamrah Qahwa"},
    { nome: "Spectre" },
    { nome: "Ghost" },
    { nome: "Attar Al Wesal" },
    { nome: "Club de Nuit" },
    { nome: "Qaed Al Fursan" },
    { nome: "Asad" },
    { nome: "Asad Bourbon" },
    { nome: "Asad Elixir" },
    { nome: "Qaed Al Fursan Unlimited" },
    { nome: "Rayhaan" },
    { nome: "Elixir Eqaab" },
    { nome: "Fakhar Gold" },
];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosMasculinos.forEach((produto) => {
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