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

console.log('Bem-vindo(a) ao jogo de Blackjack!')
deuRuim = 0
while(!deuRuim)
   if(confirm('Gostaria de jogar uma partida de Blackjack?')) {
   
      let cartaUsuario1 = comprarCarta();
      let cartaUsuario2 = comprarCarta();
   
      let cartaComputador1 = comprarCarta();
      let cartaComputador2 = comprarCarta();
      
      if (cartaUsuario1 == 11 && cartaUsuario2 == 11){
         deuRuim =1
      } else if(cartaComputador1 == 11 && cartaComputador2 == 11){
         deuRuim =1
      }
   
      let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor 
      let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

      console.log('Usuário - cartas: ', cartaUsuario1.texto, cartaUsuario2.texto, ' - pontuação ', pontuacaoUsuario)
      console.log('Computador - cartas: ', cartaComputador1.texto, cartaComputador2.texto, ' - pontuação ', pontuacaoComputador)
        
         if(pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario < 22) {
            console.log('Usuário ganhou! 😎')
            }else if (pontuacaoUsuario == 21 && pontuacaoComputador == 21){
            console.log('Empatou! 🤔')
            }else if(pontuacaoUsuario == 21){
               console.log('Usuário ganhou! 😎')
            }else if(pontuacaoComputador == 21){
               console.log('Computador ganhou! 😐')
            }else if(pontuacaoComputador > pontuacaoUsuario && pontuacaoComputador < 22){
               console.log('Computador ganhou! 😐')
            }else if(pontuacaoUsuario == pontuacaoComputador){
               console.log('Empatou! 🤔')
            }
   }else{
      console.log('Jogo finalizado, até a próxima!')
      break;
}
