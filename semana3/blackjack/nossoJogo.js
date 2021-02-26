/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
    Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)
 * 
 * 
 * 
 */

/*console.log('Bem-vindo(a) ao jogo de Blackjack!')
usuario = prompt('Qual seu nome?')

if(confirm('Gostaria de jogar uma partida de Blackjack?')) {
   const cartaUsuario1 = comprarCarta();
   const cartaUsuario2 = comprarCarta();

   const cartaComputador1 = comprarCarta();
   const cartaComputador2 = comprarCarta();


   pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor 
   pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

   console.log(usuario, ' - cartas: ', cartaUsuario1.texto, cartaUsuario2.texto, ' - pontuação ', pontuacaoUsuario)
   console.log('Computador - cartas: ', cartaComputador1.texto, cartaComputador2.texto, ' - pontuação ', pontuacaoComputador)

   if(pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario < 21 || pontuacaoComputador > 21) {
      console.log(usuario, ' ganhou! 😎')
      } else if(pontuacaoUsuario < pontuacaoComputador && pontuacaoComputador < 21 || pontuacaoUsuario > 21){
         console.log('Computador ganhou! 😐')
      }else if(pontuacaoUsuario === pontuacaoComputador){
         console.log('Empatou! 🤔')
      }else if (pontuacaoUsuario < 21){
         if(confirm('Gostaria de escolher mais uma carta?')){
            cartaUsuario1.comprarCarta();
            cartaComputador1.comprarCarta();
         }
   } else {
   console.log('Jogo finalizado, até a proxima')
   }
}*/