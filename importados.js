

const produtosImportados = [
    { nome: "La Vie Est Belle", imagem: "assets/importados/La_Vie_Est_Belle.webp" },
    { nome: "Ultra Male", imagem: "assets/importados/Ultra_Male.webp" },
    { nome: "Le Male Elixir", imagem: "assets/importados/Le_Male_Elixir.jpg" },
    { nome: "Le Beau Le Parfum", imagem: "assets/importados/Le_Beau_Le_Parfum.jpg" },
    { nome: "212 VIP Black", imagem: "assets/importados/212_VIP_Black.webp" },
    { nome: "212 Elixir", imagem: "assets/importados/212_Elixir.webp" },
    { nome: "212 VIP Rosé", imagem: "assets/importados/212_VIP_Rosé.jpg" },

];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosImportados.forEach((produto) => {
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