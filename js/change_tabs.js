document.addEventListener('DOMContentLoaded', () => {
    const productTab = document.getElementById('product-tab');
    const imagesTab = document.getElementById('images-tab');
    const informationSection = document.getElementById('information-section');
    const imagesSection = document.getElementById('images-section');

    if (productTab && imagesTab && informationSection && imagesSection) {
        productTab.addEventListener('click', () => {
            // Mostrar información, ocultar galería
            informationSection.classList.remove('hidden');
            imagesSection.classList.add('hidden');

            // Actualizar clases de los botones
            productTab.classList.remove('bg-gray-100', 'text-gray-700');
            productTab.classList.add('bg-blue-600', 'text-white');

            imagesTab.classList.remove('bg-blue-600', 'text-white');
            imagesTab.classList.add('bg-gray-100', 'text-gray-700');
        });

        imagesTab.addEventListener('click', () => {
            // Mostrar galería, ocultar información
            informationSection.classList.add('hidden');
            imagesSection.classList.remove('hidden');

            // Actualizar clases de los botones
            imagesTab.classList.remove('bg-gray-100', 'text-gray-700');
            imagesTab.classList.add('bg-blue-600', 'text-white');

            productTab.classList.remove('bg-blue-600', 'text-white');
            productTab.classList.add('bg-gray-100', 'text-gray-700');
        });
    }
});

// Función para cambiar la imagen principal al hacer clic en las miniaturas
function toExchangeImage(element) {
    const imgMain = document.getElementById('img_main');
    if (imgMain && element) {
        imgMain.src = element.src;
    }
}

// Funciones para el modal de zoom de imágenes
function viewImage(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    if (modal && modalImg) {
        modalImg.src = src;
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}
