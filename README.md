# FanDuel Decimal Odds Converter 🎲📉



Uma extensão de navegador simples e eficiente que melhora a experiência de navegação no site do FanDuel adicionando a conversão de odds americanas para decimais em tempo real.



Como sites de apostas são *Single Page Applications* (SPAs) dinâmicas com atualizações constantes, este projeto utiliza `MutationObserver` para garantir que qualquer odd atualizada ao vivo na tela seja imediatamente convertida sem precisar recarregar a página.



## 🚀 Funcionalidades



* **Conversão em Tempo Real:** Identifica e converte odds instantaneamente enquanto você navega ou enquanto as linhas mudam.

* **UI Não Intrusiva:** A extensão não apaga a odd americana original. Ela injeta a odd decimal logo ao lado (ex: `-900 (1.11)`), permitindo que você mantenha a referência nativa do site.

* **Foco em Agilidade:** Ideal para analisar rapidamente o valor em linhas dinâmicas, como *player props* da NBA ou mercados de futebol, facilitando a gestão da banca e o cálculo de unidades.



## 🛠️ Tecnologias Utilizadas



* **JavaScript Puro (Vanilla JS):** Sem frameworks pesados, garantindo máxima performance.

* **DOM Manipulation:** Injeção de elementos HTML e estilização via script.

* **MutationObserver API:** Monitoramento assíncrono da árvore DOM para reagir a mudanças no site.

* **Manifest V3:** Padrão atualizado de segurança e estrutura para extensões de navegadores baseados em Chromium.



## ⚙️ Como Instalar e Testar (Modo Desenvolvedor)



Como a extensão ainda não está publicada na loja do Chrome, você pode instalá-la localmente:



1. Faça o clone deste repositório ou baixe os arquivos (`manifest.json` e `content.js`) em uma pasta.

2. Abra o Google Chrome ou Microsoft Edge e acesse `chrome://extensions/` (ou `edge://extensions/`).

3. Ative o **Modo do desenvolvedor** no canto superior direito.

4. Clique no botão **Carregar sem compactação** (Load unpacked).

5. Selecione a pasta onde você salvou os arquivos.

6. Acesse o site do FanDuel. As odds decimais aparecerão automaticamente em amarelo ao lado das odds originais!

---

Desenvolvido para facilitar a análise matemática nas apostas esportivas.
