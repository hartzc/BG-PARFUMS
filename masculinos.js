

const produtosMasculinos = [
    { nome: "Salvo", imagem: "assets/masculinos/Salvo.jpg" },
    { nome: "Opulent Dubai", imagem: "assets/masculinos/Opulent_Dubai.jpg" },
    { nome: "Habik", imagem: "assets/masculinos/Habik.webp" },
    { nome: "Alpine Homme Sport", imagem: "assets/masculinos/Alpine_Homme_Sport.jpg" },
    { nome: "Fakhar Black", imagem: "assets/masculinos/Fakhar_Black.webp" },
    { nome: "Fakhar Platinum", imagem: "assets/masculinos/Fakhar_Platinum.jfif" },
    { nome: "Club 6 Voyage", imagem: "assets/masculinos/Club_6.webp" },
    { nome: "Ameerati", imagem: "assets/masculinos/Ameerati.jpg" },
    { nome: "His Confession", imagem: "assets/masculinos/His_Confession.jpg" },
    { nome: "Pisa", imagem: "assets/masculinos/Pisa.jpg" },
    { nome: "World Cup", imagem: "assets/masculinos/World_Cup.jpg" },
    { nome: "Liquid Brun", imagem: "assets/masculinos/Liquid_Brun.jpg" },
    { nome: "Khamrah Qahwa", imagem: "assets/masculinos/Khamrah_Qahwa.webp" },
    { nome: "Spectre", imagem: "assets/masculinos/Spectre.jpg" },
    { nome: "Ghost", imagem: "assets/masculinos/Ghost.webp" },
    { nome: "Attar Al Wesal", imagem: "assets/masculinos/Attar_Al_Wesal.jpg" },
    { nome: "Club de Nuit", imagem: "assets/masculinos/Club_de_Nuit.jpg" },
    { nome: "Qaed Al Fursan", imagem: "assets/masculinos/Qaed_Al_Fursan.jpg" },
    { nome: "Asad", imagem: "assets/masculinos/Asad.jpg" },
    { nome: "Asad Bourbon", imagem: "assets/masculinos/Asad_Bourbon.jpg" },
    { nome: "Asad Elixir", imagem: "assets/masculinos/Asad_Elixir.jpg" },
    { nome: "Qaed Al Fursan Unlimited", imagem: "assets/decants/Qaed_Al_Fursan_Unlimited.jpg" },
    { nome: "Rayhaan Elixir", imagem: "assets/masculinos/Rayhaan.jpg" },
    { nome: "Eqaab", imagem: "assets/masculinos/Elixir_Eqaab.png" },
    { nome: "Fakhar Gold", imagem: "assets/masculinos/Fakhar_Gold.webp" },
    { nome: "Cebolinha", imagem: "assets/masculinos/Cebola.jpg" }
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