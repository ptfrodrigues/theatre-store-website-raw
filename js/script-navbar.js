let currentIndex = 0;

/**
 * Para alterar cor do menu. Retorna o próximo elemento do array e volta ao início após o último elemento.
 * @param {Array} array - Um array de elementos.
 * @returns {*} - O próximo elemento do array, ou o primeiro elemento se o final for alcançado.
 */
function getNextElement(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Por favor, forneça um array não vazio.");
    }

    const element = array[currentIndex];
    currentIndex = (currentIndex + 1) % array.length; // Volta ao início após o último elemento
    return element;
}

/**
 * Obtém o valor de uma variável CSS.
 * @param {string} name - O nome da variável CSS (e.g., '--colour__black').
 * @returns {string} - O valor da variável CSS.
 */
function getStyleValue(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/**
 * Para alterar as cores no menu. Retorna branco para cores escuras e preto para cores claras.
 * @param {string} color - Um código de cor em hexadecimal (e.g., "#000000" ou "#FFFFFF").
 * @returns {string} - "white" se a cor for escura, "black" se a cor for clara.
 */
function getContrastingColour(color) {
    const black = getStyleValue('--colour__black');
    const white = getStyleValue('--colour__white');
    color = color.replace(/^#/, '');

    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance > 186 ? black : white;
}

const TOGGLER_TEXT_CLOSE = 'close';
const TOGGLER_TEXT_MENU = 'menu';

class NavbarMobileMenuHandler {
    constructor() {
        this.offcanvasElement = document.getElementById('offcanvasNavbar');
        this.togglerText = document.getElementById('r3-navbar__toggler-text');
        this.brandSmall = document.getElementById('r3-navbar__brand-small');

        if (!this.offcanvasElement || !this.togglerText || !this.brandSmall) {
            console.error('Um ou mais elementos necessários estão ausentes no DOM.');
            return;
        }
        this.colours = this.getColours(); 
    }

    getColours() {
        return [
            getStyleValue('--colour__blue'),
            getStyleValue('--colour__green'),
            getStyleValue('--colour__yellow'),
            getStyleValue('--colour__black')
        ];
    }

    handleShow = () => {
        const randomBgColour = getNextElement(this.colours);
        const contrastingColour = getContrastingColour(randomBgColour);

        document.documentElement.style.setProperty('--dynamic-background-colour', randomBgColour);
        document.documentElement.style.setProperty('--dynamic-text-colour', contrastingColour);

        this.togglerText.textContent = TOGGLER_TEXT_CLOSE;
        this.brandSmall.classList.add('r3-utils__hidden');
        this.offcanvasElement.classList.add('offcanvas-open');
    };

    handleHide = () => {
        const black = getStyleValue('--colour__black');
        this.togglerText.textContent = TOGGLER_TEXT_MENU;
        document.documentElement.style.setProperty('--dynamic-text-colour', black);
        this.brandSmall.classList.remove('r3-utils__hidden');
        this.offcanvasElement.classList.remove('offcanvas-open');
    };

    initEventListeners() {
        this.offcanvasElement.addEventListener('show.bs.offcanvas', this.handleShow);
        this.offcanvasElement.addEventListener('hide.bs.offcanvas', this.handleHide);
    }
}

const navbarHandler = new NavbarMobileMenuHandler();
navbarHandler.initEventListeners();
