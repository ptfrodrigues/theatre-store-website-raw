// Inicializa a variável para armazenar o preço da peça selecionada

let selectedPrice = 0; 

function selectShow(selectElement) {
    
    // Exibir o formulário
    document.getElementById('form-container').style.display = 'block'; 
     
    // Obter a peça associada
    const card = selectElement.closest('.card');  
    const title = card.querySelector('.card-title').textContent; // Obter o título da peça
    selectedPrice = parseFloat(card.getAttribute('data-price')); // Obter o preço da peça
    
    // Obter o horário selecionado
    const selectedDatetime = selectElement.value; 

    // Atualizar o campo do formulário com o título
    document.getElementById('selected-title').value = title; 

    // Atualizar o campo do formulário com o horário
    document.getElementById('selected-datetime').value = selectedDatetime; 

    updateTotal(); // Atualizar o total sempre que uma peça é selecionada

    //Rolar suavemente para a seção do formulário
    document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });  
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
