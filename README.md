# Loja Virtual

Este projeto é uma aplicação web simples que permite que os usuários visualizem produtos, façam pedidos e calculem o total de suas compras em uma loja virtual. O sistema calcula automaticamente o subtotal e o total dos itens no carrinho de compras.

## Funcionalidades

- Visualização de produtos com preços.
- Inserção de produtos no carrinho com base em códigos.
- Cálculo automático do subtotal por item e do total geral da compra.
- Exibição de um resumo do pedido e finalização da compra.

## Tecnologias Utilizadas

- HTML
- JavaScript (DOM)

## Estrutura do Projeto

### `index.html`

Este arquivo contém a estrutura HTML da aplicação, incluindo:

- Uma tabela com produtos disponíveis.
- Campos de entrada para o código do produto e quantidade.
- Botões para adicionar itens ao carrinho, visualizar o carrinho e finalizar o pedido.

### `questaoDom01.js`

Este arquivo contém a lógica JavaScript para manipulação do DOM e cálculo dos pedidos. Principais funções:

- `pedidoCliente()`: Adiciona um produto ao carrinho com base no código e na quantidade.
- `exibePedido(mensagem)`: Exibe mensagens relacionadas ao pedido no DOM.
- `somarPedidos()`: Calcula o total de todos os itens no carrinho.
- `visualizarCarrinho()`: Exibe todos os itens no carrinho de compras.
- `finalizarPedido()`: Finaliza o pedido e exibe o total a pagar.

## Como Usar

1. **Clone o repositório** ou baixe os arquivos:
   ```bash
   git clone https://github.com/Joaquim-Renato/ativFinalComDomQuestao1.git
