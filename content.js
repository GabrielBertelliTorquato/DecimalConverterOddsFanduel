// Função para calcular a odd decimal
function convertToDecimal(americanOdd) {
    let odd = parseInt(americanOdd.replace('+', ''));
    if (isNaN(odd)) return americanOdd;

    let decimal;
    if (odd > 0) {
        decimal = (odd / 100) + 1;
    } else {
        decimal = (100 / Math.abs(odd)) + 1;
    }
    return decimal.toFixed(2);
}

// Função principal que varre os elementos de forma inteligente
function appendDecimalOdds() {
    // Pega todas as tags 'span'. Removemos o filtro para permitir atualizações
    // quando o FanDuel altera o texto da odd (removendo nosso span decimal).
    const elements = document.querySelectorAll('span'); 

    elements.forEach(el => {
        // Se já foi convertido e ainda tem o span filho (a odd decimal), ignoramos (está atualizado)
        if (el.getAttribute('data-convertido') === 'true' && el.children.length > 0) {
            return;
        }

        // A condição el.children.length === 0 garante que estamos a olhar para o 
        // elemento final de texto e não para caixas maiores que contêm vários textos
        if (el.children.length === 0) {
            let text = el.innerText.trim();
            
            // Regex rigoroso: O texto tem que começar EXATAMENTE com + ou -, 
            // seguido de 3 ou mais dígitos (ex: -900, +490) e terminar ali.
            if (/^[+-]\d{3,}$/.test(text)) {
                let decimalValue = convertToDecimal(text);
                
                // Cria o novo elemento que vai guardar a odd decimal
                let decimalSpan = document.createElement('span');
                decimalSpan.innerText = ` (${decimalValue})`;
                
                // Estilização (Amarelo para destacar ao lado do texto branco/azul)
                decimalSpan.style.color = '#fbbf24'; 
                decimalSpan.style.marginLeft = '5px';
                decimalSpan.style.fontSize = '0.9em';
                decimalSpan.style.fontWeight = 'bold';

                // Adiciona o novo span após o texto da odd
                el.appendChild(decimalSpan);
                
                // Marca o elemento original para não criar um loop
                el.setAttribute('data-convertido', 'true');
            }
        }
    });
}

// Roda a primeira vez ao carregar
appendDecimalOdds();

// Observa mudanças no DOM (como quando você clica noutro jogador ou rola a página)
let debounceTimer;
const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(appendDecimalOdds, 100);
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
