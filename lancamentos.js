

const produtosLancamentos = [
    { nome: "Asad Bourbon", imagem: "assets/decants/Asad_Bourbon.jpg" },
    { nome: "Asad Elixir", imagem: "assets/decants/Asad_Elixir.jpg" },
    { nome: "Liquid Brun", imagem: "assets/decants/Liquid_Brun.jpg" },
    { nome: "His Confession", imagem: "assets/decants/His_Confession.jpg" },
    { nome: "Habik", imagem: "assets/decants/Habik.webp" },
    { nome: "Club 6", imagem: "assets/decants/Club_6.webp" },

];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosLancamentos.forEach((produto) => {
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