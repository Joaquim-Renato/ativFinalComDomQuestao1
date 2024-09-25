/* Questão 1: 
Uma determinada loja precisa calcular o preço de venda de um produto. O cálculo
deverá ser efetuado através desse programa crido por você não esquecendo que
terá que aplicar o desconto também. Considerar todas as variáveis do tipo real e
que elas serão digitadas pelo usuário. 
tudo em java script por favor
*/

var texto = document.querySelector('h1')
texto.innerHTML = 'Buonasera Katusha!'

let paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Inhaim!! Seja bem vinde!! <br> Abaixo você pode encontrar as últimas tendências em moda :)"

let facaSeuPedido = document.querySelector('h2')
facaSeuPedido.innerHTML = "Faça seu Pedido:"

  // Lista de preços dos produtos

  let pedidos = [];
  let precos = {
      "100": 40.00,
      "101": 35.00,
      "102": 50.00,
      "103": 60.00,
      "104": 80.00, 
      "105": 35.00,
      "106": 65.00,
  };
  
  var produtos = {
      "100": "Camiseta Gola V",
      "101": "Bermuda Tactel",
      "102": "Bermuda Jeans",
      "103": "Calça Skini",
      "104": "Tenis",
      "105": "Chinelo",
      "106": "Jaqueta Corta Vento"
  };
  
  function pedidoCliente() {
      let codigo = document.getElementById('pedidoCliente').value;
      let quantidade = parseInt(document.getElementById('qtd').value);
      let total;
  
      if (precos[codigo]) {
          total = precos[codigo] * quantidade;
          // Armazena um objeto com todas as informações no array 'pedidos'
          pedidos.push({
              produto: produtos[codigo],
              quantidade: quantidade,
              total: total
          });
          exibePedido(`Item adicionado. Total até agora: R$ ${somarPedidos().toFixed(2)}`);
      } else {
          exibePedido('Código inválido. Por favor, tente novamente.');
      }
  }
  
  function exibePedido(mensagem) {
      document.getElementById('guiaPedido').innerHTML = mensagem;
  }
  
  function somarPedidos() {
      return pedidos.reduce((acc, curr) => acc + curr.total, 0); // Soma os valores totais
  }
  
  function visualizarCarrinho() {
      let carrinho = document.getElementById('carrinhoCompras');
      carrinho.innerHTML = '<h4>Carrinho de Compras:</h4>';
  
      pedidos.forEach(function(item, index) {
          carrinho.innerHTML += `Item ${index + 1}: ${item.produto} | Quantidade: ${item.quantidade} | Subtotal: R$ ${item.total.toFixed(2)}<br>`;
      });
      carrinho.innerHTML += `<br>Total: R$ ${somarPedidos().toFixed(2)}`;
  }
  
  function finalizarPedido() {
      let totalFinal = somarPedidos();
      exibePedido(`Pedido finalizado! Total a pagar: R$ ${totalFinal.toFixed(2)}`);
      pedidos = []; // Limpa o array de pedidos após finalizar
  }