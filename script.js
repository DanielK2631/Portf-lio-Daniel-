// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const statusEnvio = document.getElementById('status-envio');
    const themeToggle = document.getElementById('theme-toggle');

    // Inicializa o tema padrão
    document.body.classList.add('light-theme');

    // Funcionalidade de Alternar Tema (Claro/Escuro) [cite: 64]
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.replace('light-theme', 'dark-theme');
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
        }
    });

    // Validação e Simulação de Envio do Formulário [cite: 57, 59, 61]
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Verificação de campos preenchidos [cite: 59]
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validação simples de formato de e-mail [cite: 60]
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Simulação de sucesso [cite: 61, 62]
        statusEnvio.textContent = 'Mensagem enviada com sucesso!';
        statusEnvio.style.display = 'block';
        
        // Limpa os campos após o envio
        form.reset();

        // Oculta a mensagem de sucesso após 5 segundos
        setTimeout(() => {
            statusEnvio.style.display = 'none';
        }, 5000);
    });
});