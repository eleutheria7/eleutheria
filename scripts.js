function atualizarContagem() {
    const eventoData = new Date("2025-06-20T19:00:00").getTime();
    const agora = new Date().getTime();
    const diferenca = eventoData - agora;

    if (diferenca < 0) {
        document.getElementById("dias").innerText = "0";
        document.getElementById("horas").innerText = "0";
        document.getElementById("minutos").innerText = "0";
        document.getElementById("segundos").innerText = "0";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

setInterval(atualizarContagem, 1000);

let index = 0;
const imagens = document.querySelectorAll(".carousel img");
const totalImagens = imagens.length;

function mudarImagem(direcao) {
    // Remover a classe active da imagem atual
    imagens[index].classList.remove("active");

    // Atualizar o índice com base na direção
    index = (index + direcao + totalImagens) % totalImagens;

    // Se chegar à imagem 7, volta para a imagem 1
    if (index === 7) {
        index = 0;
    }

    // Adicionar a classe active à nova imagem
    imagens[index].classList.add("active");

    // Ajustar o carrossel para mover as imagens
    const container = document.querySelector(".carousel-container");
    container.style.transform = `translateX(-${index * 100}%)`; // Movendo o carrossel
}

// Navegação automática (opcional)
setInterval(() => mudarImagem(1), 3000);

// Função para iniciar o carrossel
window.onload = function () {
    imagens[index].classList.add("active");
    const container = document.querySelector(".carousel-container");
    container.style.transform = `translateX(-${index * 100}%)`; // Inicializa a posição do carrossel
};

//  Slider de Testemunhos
let currentIndex = 0;

function scrollTestemunhos(direction) {
    const container = document.querySelector(".testemunho-wrapper");
    const cardWidth = document.querySelector(".testemunho-card").offsetWidth + 20; // Inclui espaço entre os cards
    const visibleCards = 3; // Número de cards visíveis por vez
    const totalCards = document.querySelectorAll(".testemunho-card").length;
    const maxIndex = Math.ceil(totalCards / visibleCards) - 1; // Total de "páginas"

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    container.style.transform = `translateX(-${currentIndex * (cardWidth * visibleCards)}px)`;
}

