function openModal(imgSrc, title, description, section1ImgSrc) {
    document.getElementById('imageModalLabel').innerText = title;
    document.getElementById('imageModalDescription').innerText = description;

    // Define o fundo do modal como a imagem clicada
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.backgroundImage = `url('${imgSrc}')`;

    // Define o fundo da seção 1 com a primeira imagem da galeria
    const section1 = document.querySelector('.section-1');
    section1.style.backgroundImage = `url('${section1ImgSrc}')`;

    // Exibir o fundo escurecido personalizado
    document.getElementById('custom-backdrop').style.display = 'block';

    // Mostrar o modal
    var modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();

    // Remover o fundo personalizado quando o modal é fechado
    document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
        document.getElementById('custom-backdrop').style.display = 'none';
    });
}

