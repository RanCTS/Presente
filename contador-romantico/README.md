# Contador Romântico

Este é um site romântico que contém:
- Uma foto de casal inserida diretamente no código-fonte
- Uma frase romântica inserida diretamente no código-fonte
- Um contador de tempo que conta a partir de 5 de outubro de 2024

## Estrutura do Projeto

O projeto contém os seguintes arquivos:
- `index.html`: Estrutura HTML do site com a foto e a frase
- `style.css`: Estilos CSS para a aparência romântica do site
- `script.js`: Código JavaScript para o contador de tempo
- `casal-romantico.jpg`: Imagem do casal ao pôr do sol

## Como Modificar a Foto

Para substituir a foto por outra de sua preferência:

1. Escolha uma nova imagem romântica e salve-a na pasta do projeto
2. Abra o arquivo `index.html` em um editor de texto
3. Localize a seção de foto (aproximadamente na linha 21):

```html
<section class="photo-section">
    <!-- Imagem inserida diretamente no código-fonte -->
    <div class="photo-container">
        <img src="casal-romantico.jpg" alt="Casal romântico ao pôr do sol">
    </div>
</section>
```

4. Substitua `casal-romantico.jpg` pelo nome do seu novo arquivo de imagem
5. Você também pode modificar o texto alternativo (`alt="Casal romântico ao pôr do sol"`) para descrever sua nova imagem

## Como Modificar a Frase

Para personalizar a frase romântica:

1. Abra o arquivo `index.html` em um editor de texto
2. Localize a seção da frase (aproximadamente na linha 28):

```html
<section class="quote-section">
    <!-- Frase romântica inserida diretamente no código-fonte -->
    <blockquote>
        "Cada segundo ao seu lado é um momento de eternidade gravado em meu coração. 
        Desde o dia 5 de outubro, quando nossos caminhos se cruzaram, 
        o tempo ganhou um novo significado em minha vida."
    </blockquote>
    <p class="author">— Para você, com todo meu amor</p>
</section>
```

3. Substitua o texto dentro das tags `<blockquote>` pela sua frase romântica personalizada
4. Se desejar, também pode modificar a assinatura dentro das tags `<p class="author">`

## Como Modificar a Data do Contador

Se quiser alterar a data de início do contador:

1. Abra o arquivo `script.js` em um editor de texto
2. Localize a linha que define a data de início (linha 2):

```javascript
const startDate = new Date('2024-10-05T00:00:00');
```

3. Substitua `'2024-10-05T00:00:00'` pela sua data desejada no formato 'AAAA-MM-DDThh:mm:ss'
4. Lembre-se também de atualizar o texto no HTML que menciona a data (aproximadamente na linha 39):

```html
<h2>Tempo juntos desde 5 de outubro de 2024</h2>
```

## Como Usar

1. **Abrir o site**: Abra o arquivo `index.html` em qualquer navegador web moderno.
2. O contador mostrará automaticamente o tempo decorrido desde a data configurada.

## Personalização Adicional

Você pode personalizar ainda mais o site editando:
- `style.css` para mudar cores, fontes e layout
- `script.js` para modificar o comportamento do contador
- `index.html` para alterar a estrutura ou adicionar novos elementos

