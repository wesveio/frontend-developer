## Demo
A demonstração pode ser verificado aqui: [Demo](https://friendly-morse-ffcb7b.netlify.com/)

### Atenção
Como as requests da api não retornam com liberação de cross origin, é importante desabilitar o CORS do navegador para que as requests possam ser executadas. Veja [Aqui](https://professor-falken.com/pt/general/como-deshabilitar-la-politica-del-mismo-origen-o-same-origin-policy-en-chrome/) como realizar esta tarefa no Google Chrome.

Os produtos na vitrine da página home, são produtos que estão sendo buscados também por API na loja da FNAC, e são apenas para demonstração.

## Páginas!
- Home [OK]
- Produto [OK]
- Categoria [Pendente]

## O que foi utilizado?
Neste projeto foi utilizado os seguintes itens;
- [Facebook - create-react-app](https://github.com/facebook/create-react-app)
- [Bootstrap](http://getbootstrap.com/)
- [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

## Instruções

Clone o projeto e instale as dependecias rodando<br>
    `$ npm install`

### `npm start`
Para rodar a app em modo de desenvolvimento<br>
O servidor subirá no link [http://localhost:3000](http://localhost:3000).

### `npm run build`
Constrói o app na pasta `build`.<br>
Agrupando corretamente o React no modo de produção e otimizando a build para obter o melhor desempenho.
A compilação é reduzida e os nomes dos arquivos incluem os hashes.





# Bluefoot DEV: Teste prático para Frontend Developer


## Instruções

Crie um `fork` deste projeto, e desenvolva em cima do seu fork. Use o *README.md* principal do seu repositório para nos contar como foi sua experiência em realizar o teste, esperamos que você nos conte: as decisões que você tomou, como você organizou seu código, as funcionalidades e instruções de como rodar seu projeto e até as dificuldades e desafios que você teve.


## Briefing

Você deve desenvolver uma aplicação e interface de busca de produtos para um grande ecommerce de uma multinacional no Brasil.

A interface deve ser bastante semelhante a busca do [Submarino](https://www.submarino.com.br), um input text onde os resultados vão aparecendo conforme o usuário digita seu termo. Em parte do resultado, você deve exibir os resultados de uma das API's (autocomplete), e em outra parte você deve efetuar outro request por Full Text em outro endpoint trazendo os 3 primeiros produtos do response.


`Endpoint da API de autocomplete:` 
http://agenciabluefoot.vtexcommercestable.com.br/buscaautocomplete/?productNameContains={{termo}}


`Endpoint da API de seach full text:`
http://agenciabluefoot.vtexcommercestable.com.br/api/catalog\_system/pub/products/search/{{termo}}?map=ft

Documentação completa da API de busca: [https://documenter.getpostman.com/view/845/search-103/Hs43]


Para cada um dos 3 produtos, devemos exibir dados como titulo, thumbnail, preço e outros dados que você considerar importante para a taxa de conversão (esperamos suas considerações no Readme.md lembra?)

Quando clicarmos no produto, você pode optar por dois caminhos:

- Levar o usuário para o link do produto
- Exibir os dados completos do produto em outra interface elaborada por você

Com o submit do formulário, deve ser exibida uma lista com todos os produtos encontrados no response, exibindo dados como título, thumbnail, preço, link e outros dados importantes para a taxa de conversão da loja.


### O que nós esperamos do seu teste

* Ver na solução a utilização de um framework / biblioteca da sua escolha e que você nos conte sobre essa escolha. Aqui na Bluefoot nós utilizamos o React.
* Queremos ver a utilização de dependency managers (npm, webpack etc)
* Automação de tasks com gulp, grunt ou outra ferramenta de sua escolha
* HTML5 escrito da maneira mais semântica possível
* CSS3 com um pre processador de sua escolha, aqui na Bluefoot utilizamos SASS SCSS mas gostamos do PostCSS também.
* Layout responsivo

### O que nós ficaríamos felizes de ver em seu teste

* Testes unitários
* Alguma metodologia para definição e organização do seu código CSS

### O que nos impressionaria

* Testes de aceitação
* [BEM naming convention](http://getbem.com/naming/)
* Aplicação de animações em css quando possível
* Ver o código rodando live

### O que nós não gostaríamos

* Descobrir que não foi você quem fez seu teste
* Ver commits gigantes, sem mensagens ou com -m sem pé nem cabeça


## O que avaliaremos de seu teste

* Histórico de commits do git
* As instruções de como rodar o projeto
* Organização, semântica, estrutura, legibilidade, manutenibilidade, escalabilidade do seu código e suas tomadas de decisões
* Alcance dos objetivos propostos
* Componentização e extensibilidade dos componentes Javascript
