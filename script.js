// JF Aviation - JavaScript Profissional

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const successMessage = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Captura de dados do formulário
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    // Validação de campos
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    if (!validarEmail(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      // Simulação de envio de dados (você pode substituir por uma chamada real à API)
      await enviarFormulario({ nome, email, mensagem });

      // Feedback visual
      successMessage.style.display = "block";
      successMessage.textContent = "Mensagem enviada com sucesso!";

      // Resetar formulário
      form.reset();

      // Ocultar mensagem após 5 segundos
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);

    } catch (error) {
      alert("Houve um erro ao enviar a mensagem. Tente novamente mais tarde.");
      console.error("Erro no envio:", error);
    }
  });
});

// Função para validar e-mail com expressão regular
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Função simulando envio de dados para o servidor
async function enviarFormulario(dados) {
  console.log("Enviando dados...", dados);
  return new Promise((resolve) => setTimeout(resolve, 1000)); // Simula 1s de atraso
}
