// Simulación de datos (esto se traería desde la BD con fetch)
/*
fetch('/api/atractivos')
    .then(res => res.json())
    .then(data => {
        // usar data para renderizar
    });
*/

const carouselImages = [
    "https://via.placeholder.com/1200x400?text=Atractivo+1",
    "https://via.placeholder.com/1200x400?text=Atractivo+2",
    "https://via.placeholder.com/1200x400?text=Atractivo+3"
];

const atractivos = [
    { id: 1, nombre: "Playa Blanca", descripcion: "Hermosa playa de arena blanca.", imagen: "https://via.placeholder.com/400?text=Playa+Blanca" },
    { id: 2, nombre: "Castillo San Felipe", descripcion: "Imponente fortaleza colonial.", imagen: "https://via.placeholder.com/400?text=Castillo+San+Felipe" },
    { id: 3, nombre: "Centro Histórico", descripcion: "Calles empedradas y arquitectura colonial.", imagen: "https://via.placeholder.com/400?text=Centro+Histórico" },
    { id: 4, nombre: "Islas del Rosario", descripcion: "Archipiélago paradisíaco.", imagen: "https://via.placeholder.com/400?text=Islas+del+Rosario" }
];

// Carrusel
let currentSlide = 0;

function showSlide(index) {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = `<img src="${carouselImages[index]}" alt="Atractivo ${index + 1}">`;
}

function startCarousel() {
    showSlide(currentSlide);
    setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselImages.length;
        showSlide(currentSlide);
    }, 4000);
}

// Atractivos
function renderAtractivos() {
    const grid = document.getElementById('attractives-grid');
    grid.innerHTML = '';

    atractivos.forEach(attractivo => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${attractivo.imagen}" alt="${attractivo.nombre}">
            <div class="info">
                <h3>${attractivo.nombre}</h3>
                <p>${attractivo.descripcion}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            // Navegar a la vista de atractivos
            window.location.href = `../vista-de-atractivos/index.html?id=${attractivo.id}`;
        });

        grid.appendChild(card);
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    startCarousel();
    renderAtractivos();
});
