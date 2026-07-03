


const produtosFemininos = [
    { nome: "Bade Al Oud Amethyst", imagem: "assets/Badee-Al-Oud-Amethyst-1.webp"},
    { nome: "Honor & Glory", imagem: "assets/honorandglory.webp" },
    { nome: "Fakhar Rose", imagem: "assets/j0l66.jpg" },
    { nome: "Sabah Al Ward", imagem: "assets/sabahalward.webp"},
    { nome: "Durrat Love", imagem: "assets/durratlove.webp" },
    { nome: "Durrat Al Aroos", imagem: "assets/durratalaroos.png" },
    { nome: "Shagaf Al Ward", imagem: "assets/shagaf.webp" },
    { nome: "Sabah Sugar", imagem: "assets/sabahsugar.jpg" },
    { nome: "Eclaire", imagem: "assets/eclaire.jpg" },
    { nome: "Sisterland Yum Yum", imagem: "assets/yumyum.webp" },
    { nome: "Sabah Delilah", imagem: "assets/sabahdelilah.webp" },
    { nome: "Yara", imagem: "assets/yara.jpg" },
    { nome: "Yara Candy", imagem: "assets/yaracandy.webp" },
    { nome: "Yara Elixir", imagem: "assets/yara1.jpg" },
    { nome: "Marshmallow Blush", imagem: "assets/marshmallow.jpg" },
];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosFemininos.forEach((produto) => {
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