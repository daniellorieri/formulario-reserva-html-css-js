// Elementos
const menor = document.getElementById('menor');
const acompanhadoDiv = document.querySelector('.acompanhante-group');
const acompanhado = document.getElementById('acompanhado');
const nomeAcompanhanteDiv = document.querySelector('.nome-acompanhante-row');
const nomeAcompanhante = document.getElementById('nome-acompanhante');
const form = document.querySelector('.form-cadastro');
const mensagem = document.getElementById('mensagem-confirmacao');

// Sempre começa ocultando os campos de acompanhante
function resetarCamposAcompanhante() {
  acompanhado.checked = false;
  acompanhado.disabled = true;
  acompanhadoDiv.style.opacity = 0.6;
  acompanhadoDiv.classList.add('hidden');
  nomeAcompanhante.value = '';
  nomeAcompanhante.disabled = true;
  nomeAcompanhanteDiv.classList.add('hidden');
}

// Ao alterar o checkbox "menor"
menor.addEventListener('change', function() {
  if (menor.checked) {
    // Mostra e habilita o campo "Está acompanhado"
    acompanhadoDiv.classList.remove('hidden');
    acompanhado.disabled = false;
    acompanhadoDiv.style.opacity = 1;
  } else {
    // Esconde e desabilita tudo relacionado a acompanhante
    resetarCamposAcompanhante();
  }
});

// Ao alterar o checkbox "acompanhado"
acompanhado.addEventListener('change', function() {
  if (acompanhado.checked && !acompanhado.disabled) {
    nomeAcompanhante.disabled = false;
    nomeAcompanhanteDiv.classList.remove('hidden');
  } else {
    nomeAcompanhante.value = '';
    nomeAcompanhante.disabled = true;
    nomeAcompanhanteDiv.classList.add('hidden');
  }
});

// Ao carregar a página, garantir o estado inicial
document.addEventListener("DOMContentLoaded", function() {
  resetarCamposAcompanhante();

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    mensagem.style.display = 'block';
    form.reset(); // Limpa o formulário

    // Também reseta os campos de acompanhante
    resetarCamposAcompanhante();

    setTimeout(() => {
      mensagem.style.display = 'none';
    }, 4000); // Some após 4 segundos
  });
});