

const produtosDecants = [
    { nome: "La Vie Est Belle", imagem: "assets/decants/La Vie Est Belle.webp" },
    { nome: "Ultra Male", imagem: "assets/decants/Ultra Male.webp" },
    { nome: "Le Male Elixir", imagem: "assets/decants/Le Male Elixir.jpg" },
    { nome: "Le Beau Le Parfum", imagem: "assets/decants/Le Beau Le Parfum.jfif" },
    { nome: "212 VIP Black", imagem: "assets/decants/212 VIP Black.webp" },
    { nome: "212 Elixir", imagem: "assets/decants/212 Elixir.webp" },
    { nome: "212 VIP Rosé", imagem: "assets/decants/212 VIP Rosé.jpg" },

    { nome: "Bade Al Oud Amethyst", imagem: "assets/decants/Badee-Al-Oud-Amethyst-1.webp"},
    { nome: "Honor & Glory", imagem: "assets/decants/honorandglory.webp" },
    { nome: "Fakhar Rose", imagem: "assets/decants/j0l66.jpg" },
    { nome: "Sabah Al Ward", imagem: "assets/decants/sabahalward.webp"},
    { nome: "Durrat Love", imagem: "assets/decants/durratlove.webp" },
    { nome: "Durrat Al Aroos", imagem: "assets/decants/durratalaroos.png" },
    { nome: "Shagaf Al Ward", imagem: "assets/decants/shagaf.webp" },
    { nome: "Sabah Sugar", imagem: "assets/decants/sabahsugar.jpg" },
    { nome: "Eclaire", imagem: "assets/decants/eclaire.jpg" },
    { nome: "Sisterland Yum Yum", imagem: "assets/decants/yumyum.webp" },
    { nome: "Sabah Delilah", imagem: "assets/decants/sabahdelilah.webp" },
    { nome: "Yara", imagem: "assets/decants/yara.jpg" },
    { nome: "Yara Candy", imagem: "assets/decants/yaracandy.webp" },
    { nome: "Yara Elixir", imagem: "assets/decants/yara1.jpg" },
    { nome: "Marshmallow Blush", imagem: "assets/decants/marshmallow.jpg" },

    { nome: "Salvo", imagem: "assets/decants/salvo.jfif" },
    { nome: "Opulent Dubai", imagem: "assets/decants/Opulent Dubai.jpg" },
    { nome: "Habik", imagem: "assets/decants/Habik.webp" },
    { nome: "Alpine Homme Sport", imagem: "assets/decants/Alpine Homme Sport.jpg" },
    { nome: "Fakhar Black", imagem: "assets/decants/Fakhar Black.webp" },
    { nome: "Fakhar Platinum", imagem: "assets/decants/Fakhar Platinum.jfif" },
    { nome: "Club 6", imagem: "assets/decants/Club 6.webp" },
    { nome: "Voyage", imagem: "assets/decants/Voyage.webp" },
    { nome: "Ameerati", imagem: "assets/decants/Ameerati.jpg" },
    { nome: "His Confession", imagem: "assets/decants/His Confession.jpg" },
    { nome: "Pisa", imagem: "assets/decants/Pisa.jpg" },
    { nome: "World Cup", imagem: "assets/decants/World Cup.jfif" },
    { nome: "Khamrah Qahwa", imagem: "assets/decants/Khamrah Qahwa.webp" },
    { nome: "Spectre", imagem: "assets/decants/Spectre.jpg" },
    { nome: "Ghost", imagem: "assets/decants/Ghost.webp" },
    { nome: "Attar Al Wesal", imagem: "assets/decants/Attar Al Wesal.jpg" },
    { nome: "Club de Nuit", imagem: "assets/decants/Club de Nuit.jfif" },
    { nome: "Qaed Al Fursan", imagem: "assets/decants/Qaed Al Fursan.webp" },
    { nome: "Asad", imagem: "assets/decants/Asad.jpg" },
    { nome: "Asad Bourbon", imagem: "assets/decants/Asad Bourbon.jpg" },
    { nome: "Asad Elixir", imagem: "assets/decants/Asad Elixir.jpg" },
    { nome: "Qaed Al Fursan Unlimited", imagem: "assets/decants/Qaed Al Fursan Unlimited.jpg" },
    { nome: "Rayhaan", imagem: "assets/decants/rayhaan.jpg" },
    { nome: "Elixir Eqaab", imagem: "assets/decants/Elixir Eqaab.png" },
    { nome: "Fakhar Gold", imagem: "assets/decants/Fakhar Gold.webp" },
    { nome: "Cebolinha", imagem: "assets/masculinos/Cebola.webp" }
    

];

function montarCardsProdutos() {
    const grid = document.querySelector(".produtos-grid");
    if (!grid) return;

    produtosDecants.forEach((produto) => {
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