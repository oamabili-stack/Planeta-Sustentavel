// Array de objetos contendo as informações lúdicas e educativas
const informacoesPreservacao = [
    {
        titulo: "Rotação de Culturas",
        texto: "Alternar o tipo de planta em cada safra melhora a saúde do solo, evita o esgotamento de nutrientes e diminui a incidência de pragas naturalmente, reduzindo o uso de defensivos químicos."
    },
    {
        titulo: "Sistemas Agroflorestais (SAF)",
        texto: "É a plantação de alimentos integrada com árvores nativas da floresta. Essa técnica protege os animais, mantém a umidade da terra e enriquece a biodiversidade enquanto produz alimentos saudáveis."
    },
    {
        titulo: "Uso Inteligente da Água",
        texto: "A agricultura familiar utiliza muito a irrigação gota a gota, direcionando a água direto para a raiz da planta. Isso evita o desperdício desse recurso tão valioso para o nosso planeta!"
    }
];

// Função que muda o conteúdo da tela dinamicamente de acordo com o botão clicado
function mudarAba(index) {
    // Captura os elementos necessários
    const containerTexto = document.getElementById('tab-text');
    const botoes = document.querySelectorAll('.tab-btn');
    
    // Atualiza a classe ativa nos botões para efeito visual
    botoes.forEach((btn, i) => {
        if(i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Altera o conteúdo de forma dinâmica
    containerTexto.innerHTML = `
        <h3 style="color: #1b5e20; margin-bottom: 10px;">${informacoesPreservacao[index].titulo}</h3>
        <p>${informacoesPreservacao[index].texto}</p>
    `;
}

// Inicializa a primeira aba assim que o site carregar
window.onload = function() {
    mudarAba(0);
};