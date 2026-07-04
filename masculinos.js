

const produtosMasculinos = [
    { nome: "Salvo", imagem: "assets/masculinos/salvo.jfif" },
    { nome: "Opulent Dubai", imagem: "assets/masculinos/Opulent Dubai.jpg" },
    { nome: "Habik", imagem: "assets/masculinos/Habik.webp" },
    { nome: "Alpine Homme Sport", imagem: "assets/masculinos/Alpine Homme Sport.jpg" },
    { nome: "Fakhar Black", imagem: "assets/masculinos/Fakhar Black.webp" },
    { nome: "Fakhar Platinum", imagem: "assets/masculinos/Fakhar Platinum.jfif" },
    { nome: "Club 6", imagem: "assets/masculinos/Club 6.webp" },
    { nome: "Voyage", imagem: "assets/masculinos/Voyage.webp" },
    { nome: "Ameerati", imagem: "assets/masculinos/Ameerati.jpg" },
    { nome: "His Confession", imagem: "assets/masculinos/His Confession.jpg" },
    { nome: "Pisa", imagem: "assets/masculinos/Pisa.jpg" },
    { nome: "World Cup", imagem: "assets/masculinos/World Cup.jfif" },
    { nome: "Liquid Brun", imagem: "assets/masculinos/Liquid Brun.jpg" },
    { nome: "Khamrah Qahwa", imagem: "assets/masculinos/Khamrah Qahwa.webp" },
    { nome: "Spectre", imagem: "assets/masculinos/Spectre.jpg" },
    { nome: "Ghost", imagem: "assets/masculinos/Ghost.webp" },
    { nome: "Attar Al Wesal", imagem: "assets/masculinos/Attar Al Wesal.jpg" },
    { nome: "Club de Nuit", imagem: "assets/masculinos/Club de Nuit.jfif" },
    { nome: "Qaed Al Fursan", imagem: "assets/masculinos/Qaed Al Fursan.webp" },
    { nome: "Asad", imagem: "assets/masculinos/Asad.jpg" },
    { nome: "Asad Bourbon", imagem: "assets/masculinos/Asad Bourbon.jpg" },
    { nome: "Asad Elixir", imagem: "assets/masculinos/Asad Elixir.jpg" },
    { nome: "Qaed Al Fursan Unlimited", imagem: "assets/masculinos/Qaed Al Fursan Unlimited.jpg" },
    { nome: "Rayhaan", imagem: "assets/masculinos/rayhaan.jpg" },
    { nome: "Elixir Eqaab", imagem: "assets/masculinos/Elixir Eqaab.png" },
    { nome: "Fakhar Gold", imagem: "assets/masculinos/Fakhar Gold.webp" },
    { nome: "Cebolinha", imagem: "assets/masculinos/Cebola.webp" }
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