<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio - Manutenção de Tecnologia</title>
    <style>
        img{
            width: 400px;
        }
    </style>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <img src="WhatsApp Image 2026-04-22 at 18.23.06.jpeg" alt="">
    <header>
        <nav>
            <ul>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#formacao">Formação</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><button id="theme-toggle">Alternar Tema</button></li>
                
            </ul>
        </nav>
    </header>

    <main>
        <section id="sobre">
            <h1>Sobre mim</h1>
            <p>Sou profissional Técnico Especializado na Manutenção de Computadores e Celulares.
                <p></p>Atuando em Pantano Grande, RS.</p>
            <p>Além da tecnologia, tenho interesse em programação Python e desenvolvimento web..</p>
        </section>

        <section id="formacao">
            <h2>Formação</h2>
            <ul>
                <li><strong>Graduação:</strong> Cursando Ciência da Computação.</li>
                <li><strong>Técnico:</strong> Especialista em Manutenção de Hardware e Dispositivos Móveis.</li>
                <li><strong>Idiomas:</strong> Português (Nativo).</li>
            </ul>
        </section>

        <section id="portfolio">
            <h2>Portfólio</h2>
            <p>Projetos e serviços realizados:</p>
            <div class="projeto">
                <h3>DK Computech Manutenção em Computadores e Celulares</h3>
                <p>Desenvolvimento de identidade visual, ordens de serviço e gestão administrativa para assistência técnica.</p>
            </div>
            <div class="projeto">
                <h3>Algoritmos em Python</h3>
                <p>Implementação de estruturas de dados, como Árvores Binárias de Busca (BST).</p>
            </div>
        </section>

        <section id="contato">
            <h2>Contato</h2>
            <form id="form-contato">
                <div class="campo">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome">
                </div>
                <div class="campo">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email">
                </div>
                <div class="campo">
                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem"></textarea>
                </div>
                <button type="submit">Enviar Mensagem</button>
                <div class="sessao-contato-whatsapp">
    <p>Entre em contato pelo WhatsApp!</p>
    <a href="https://wa.me/51980503256" class="btn-whatsapp-corpo" target="_blank">
        WhatsApp
    </a>
</div>
            </form>
            <div id="status-envio" style="display:none; color: green; margin-top: 10px;"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - Desenvolvido por Daniel Henrique Kern - Todos direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
