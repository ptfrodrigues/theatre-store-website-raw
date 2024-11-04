let selectedPrice = 0; // Inicializa a variável para armazenar o preço da peça selecionada

function selectShow(element) {
    // Remover seleção de outros horários
    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach(item => item.classList.remove('selected'));
    
    element.classList.add('selected'); // Adicionar a classe 'selected' ao horário selecionado

    document.getElementById('form-container').style.display = 'block'; // Exibir o formulário

    const card = element.closest('.card');  // Obter a peça associada
    const title = card.querySelector('.card-title').textContent; // Obter o título da peça
    selectedPrice = parseFloat(card.getAttribute('data-price')); // Obter o preço da peça

    const selectedDatetime = element.textContent; // Obter o horário selecionado

    document.getElementById('selected-title').value = title; // Atualizar o campo do formulário com o título
    document.getElementById('selected-datetime').value = selectedDatetime; // Atualizar o campo do formulário com o horário

    updateTotal(); // Atualizar o total sempre que uma peça é selecionada
}

function togglePaymentFields() {
    const paymentMethod = document.getElementById('payment').value;
    document.getElementById('card-details').style.display = (paymentMethod === 'cartao') ? 'block' : 'none';
    document.getElementById('mbway-details').style.display = (paymentMethod === 'mbway') ? 'block' : 'none';
}

function updateTotal() {
    const quantity = document.getElementById('ticket-quantity').value; // Pegar a quantidade de ingressos
    const totalPrice = selectedPrice * quantity; // Calcular o preço total
    document.getElementById('total-price').textContent = `Total: ${totalPrice}€`; // Atualizar o texto do total
}

function addCountryCode() {
    const phoneInput = document.getElementById("phone"); // Seleciona o campo de telefone pelo ID
    if (!phoneInput.value.startsWith("+351 ")) { // Verifica se o valor do campo começa com "+351 "
        phoneInput.value = "+351 "; // Se não começar, define o valor como "+351 "
    }
}
