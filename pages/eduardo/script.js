// lista completa das peças
const pieces = [
    // peças em exibição
    {
        imgSrc: '../img/a-tupperware-of-ashes-tanika-gupta.jpg',
        title: 'A Tupperware of Ashes',
        description: 'Um drama familiar intenso e comovente sobre a vida, imigração e o ciclo espiritual indiano de morte e renascimento.',
        section1ImgSrc: '../img/a-tupperware-of-ashes-tanika-gupta.jpg',
        author: 'Tanika Gupta',
        ticketLink: 'https://link_para_compra_de_bilhete_1'
    },
    {
        imgSrc: '../img/ballet-shoes-noel-streatfeild.jpg',
        title: 'Ballet Shoes',
        description: 'O famoso livro best-seller é reinventado de forma espetacular para o palco nesta nova adaptação de Kendall Feaver.',
        section1ImgSrc: '../img/ballet-shoes-noel-streatfeild.jpg',
        author: 'Noel Streatfeild',
        ticketLink: 'https://link_para_compra_de_bilhete_2'
    },
    {
        imgSrc: '../img/coriolanus-william-shakespeare.jpg',
        title: 'Coriolanus',
        description: 'David Oyelowo faz o seu aguardado regresso ao palco de Londres nesta emocionante nova produção da tragédia política intemporal de Shakespeare.',
        section1ImgSrc: '../img/coriolanus-william-shakespeare.jpg',
        author: 'William Shakespeare',
        ticketLink: 'https://link_para_compra_de_bilhete_3'
    },
    {
        imgSrc: '../img/war-horse-michael-morpurgo.jpg',
        title: 'War Horse',
        description: 'Uma experiência teatral inesquecível que leva o público numa extraordinária jornada desde os campos de Devon até às trincheiras da Primeira Guerra Mundial em França.',
        section1ImgSrc: '../img/war-horse-michael-morpurgo.jpg',
        author: 'Michael Morpurgo',
        ticketLink: 'https://link_para_compra_de_bilhete_4'
    },
    {
        imgSrc: '../img/The-Importance-of-Being-Earnest-National-Theatre-artwork-2000x1000-1.jpg',
        title: 'The Importance of Being Earnest',
        description: 'Uma das mais famosas comédias de costumes, explorando temas de identidade e as complexidades sociais com o humor único de Wilde.',
        section1ImgSrc: '../img/The-Importance-of-Being-Earnest-National-Theatre-artwork-2000x1000-1.jpg',
        author: 'Oscar Wilde',
        ticketLink: 'https://link_para_compra_de_bilhete_8'
    },
    {
        imgSrc: '../img/frankenstein-play.png',
        title: 'Frankenstein',
        description: 'Uma reinvenção do clássico conto de terror de Mary Shelley, que narra a história de Victor Frankenstein e a sua monstruosa criação.',
        section1ImgSrc: '../pedro/assets/images/frankenstein-play.png',
        author: 'Mary Shelley',
        ticketLink: 'https://link_para_compra_de_bilhete_9'
    },

    // próximas peças
    {
        imgSrc: '../img/alterations-michael-abbensetts.jpg',
        title: 'Alterations',
        description: 'Uma comédia emblemática que ilumina a experiência da geração Windrush na Londres dos anos 70.',
        section1ImgSrc: '../img/alterations-michael-abbensetts.jpg',
        author: 'Michael Abbensetts',
        ticketLink: 'https://link_para_compra_de_bilhete_5'
    },
    {
        imgSrc: '../img/nye-tim-price-wales-millennium-center.jpg',
        title: 'Nye',
        description: 'Uma fantasia épica galesa que segue Aneurin "Nye" Bevan, uma figura crucial na política britânica e na reforma da saúde.',
        section1ImgSrc: '../img/nye-tim-price-wales-millennium-center.jpg',
        author: 'Tim Price',
        ticketLink: 'https://link_para_compra_de_bilhete_6'
    },
    {
        imgSrc: '../img/the-other-place-alexander-zeldin.jpg',
        title: 'The Other Place',
        description: 'Uma nova versão da clássica história de Antígona, que explora os temas de família, luto e justiça.',
        section1ImgSrc: '../img/the-other-place-alexander-zeldin.jpg',
        author: 'Alexander Zeldin',
        ticketLink: 'https://link_para_compra_de_bilhete_7'
    }
];

let currentPieceIndex = 0; // índice para a peça atual exibida no modal

// função para abrir o modal e definir o conteúdo dinâmico
function openModal(index) {
    const piece = pieces[index];
    currentPieceIndex = index;

    document.getElementById('imageModalLabel').innerText = piece.title;
    document.getElementById('modalAuthor').innerText = 'Autor: ' + piece.author;
    document.getElementById('imageModalDescription').innerText = piece.description;

    document.querySelector('.modal-content').style.backgroundImage = `url('${piece.imgSrc}')`;
    document.querySelector('.section-1').style.backgroundImage = `url('${piece.section1ImgSrc}')`;

    document.getElementById('buyTicketButton').onclick = () => {
        window.location.href = piece.ticketLink;
    };

    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}

// função para exibir a próxima peça no modal
function showNextPiece() {
    currentPieceIndex = (currentPieceIndex + 1) % pieces.length;
    openModal(currentPieceIndex);
}

// alterna cores de fundo das secções e rótulos para melhorar contraste
function alternateSectionAndLabelColors() {
    const currentShows = document.getElementById('current-shows');
    const upcomingShows = document.getElementById('upcoming-shows');
    let isOriginalColor = true;

    setInterval(() => {
        const [currentBg, upcomingBg] = isOriginalColor ? ['#ffffff', '#000000'] : ['#000000', '#ffffff'];
        const [currentLabelColor, upcomingLabelColor] = isOriginalColor ? ['#000000', '#ffffff'] : ['#ffffff', '#000000'];

        currentShows.style.backgroundColor = currentBg;
        upcomingShows.style.backgroundColor = upcomingBg;

        updateLabelsAndTitles(currentShows, currentLabelColor, currentBg);
        updateLabelsAndTitles(upcomingShows, upcomingLabelColor, upcomingBg);

        isOriginalColor = !isOriginalColor;
    }, 3000);
}

// função para atualizar rótulos e títulos
function updateLabelsAndTitles(section, labelBgColor, labelTextColor) {
    section.querySelectorAll('.piece-label').forEach(label => {
        label.style.backgroundColor = labelBgColor;
        label.style.color = labelTextColor;
    });
    section.querySelector('h2').style.color = labelBgColor;
}

// inicialização e eventos
window.addEventListener('load', () => {
    alternateSectionAndLabelColors();
});