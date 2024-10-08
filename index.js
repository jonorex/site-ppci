document.querySelector('.h-icon').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});


// Função para alternar a exibição da seção
function toggleSection(section, forceExpand = false) {
    const content = section.querySelector('.content');
    const button = section.querySelector('.toggle-button');

    // Expande ou minimiza o conteúdo baseado no estado atual ou força a expansão
    if (forceExpand || content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'flex'; // Exibe o conteúdo
        button.textContent = '-'; // Atualiza o texto do botão
    } else if (!forceExpand) {
        content.style.display = 'none'; // Oculta o conteúdo
        button.textContent = '+'; // Atualiza o texto do botão
    }
}

// Manipulador para quando o botão de rolagem e expansão é clicado
document.querySelectorAll('.scroll-expand-button').forEach(button => {
    button.addEventListener('click', function () {
        // Obtem o ID da seção alvo a partir do atributo data-target do botão
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Rola suavemente para a seção
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Após a rolagem, expande a seção automaticamente
            setTimeout(() => {
                toggleSection(targetSection, true); // Expande a seção forçando a exibição
            }, 500); // Atraso para garantir que a rolagem termine
        }
    });
});

// Função para alternar seções manualmente (ao clicar nos botões de cada seção)
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function () {
        const section = this.closest('.expandable-section');
        toggleSection(section); // Alterna a exibição manualmente
    });
});





// Obtém todas as seções que possuem a classe 'secoes'
var secoes = document.querySelectorAll('.secoes-ocultas');
var secoes_ocultas_a = document.querySelectorAll('.secao-oculta-after');

// Data atual
var dataAtual = new Date();

// Itera sobre todas as seções
secoes.forEach(function(secao) {
    // Obtém a data de referência definida no atributo 'data-data-referencia'
    var dataReferencia = new Date("2024-10-1");

    // Verifica se a data atual é maior ou igual à data de referência
    if (dataAtual >= dataReferencia) {
        secao.style.display = "block";  // Exibe a seção
    } else {
        secao.style.display = "none";   // Oculta a seção
    }
});

// Itera sobre todas as seções
secoes_ocultas_a.forEach(function(secao) {
    // Obtém a data de referência definida no atributo 'data-data-referencia'
    var dataReferencia = new Date("2024-10-1");

    // Verifica se a data atual é maior ou igual à data de referência
    if (dataAtual >= dataReferencia) {
        secao.style.display = "none";  // Exibe a seção
    } else {
        secao.style.display = "flex";   // Oculta a seção
    }
});