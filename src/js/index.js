/*

OBJETIVO 1 - quando clicar na seta de avanças temos que mostrar o próximo cartão da lista
    -passo 1 - dar um jeito de pegar o elemento HTML da seta vançar
    -passo 2 - dar um jeito de identificar o clique do usuário  na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    -passo 4 - buscar o cartão que esta selecionado e esconder


    OBJETIVO 2 - quando clicar na seta de voltar temos que mostrar o  cartão anterior da lista
    -passo 1 - dar um jeito de pegar o elemento HTML da seta vançar
    -passo 2 - dar um jeito de identificar o clique do usuário  na seta avançar
    - passo 3 - fazer aparecer o cartão anterior da lista
    -passo 4 - buscar o cartão que esta selecionado e esconder

*/

// -passo 1 - dar um jeito de pegar o elemento HTML da seta vançar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;


function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}
// -passo 2 - dar um jeito de identificar o clique do usuário  na seta avançar
btnAvancar.addEventListener('click', function(){
    
    if(cartaoAtual === cartoes.length - 1) return;
    esconderCartaoSelecionado();
 //   - passo 3 - fazer aparecer o próximo cartão da lista
   // const cartoes = document.querySelectorAll('.cartao');
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
    
//-passo 4 - buscar o cartão que esta selecionado e esconder
    //const cartaoSelecionado = document.querySelector(".selecionado");
    //cartaoSelecionado.classList.remove("selecionado");

})

/*
    OBJETIVO 2 - quando clicar na seta de voltar temos que mostrar o  cartão anterior da lista
    -passo 1 - dar um jeito de pegar o elemento HTML da seta vançar
    -passo 2 - dar um jeito de identificar o clique do usuário  na seta avançar
    - passo 3 - fazer aparecer o cartão anterior da lista
    -passo 4 - buscar o cartão que esta selecionado e esconder
*/


//const cartoes = document.querySelectorAll('.cartao');
//let cartaoAtual = 0;

// -passo 2 - dar um jeito de identificar o clique do usuário  na seta avançar
btnVoltar.addEventListener('click', function(){
    
    if(cartaoAtual === 0) return

    esconderCartaoSelecionado();
    //const cartaoSelecionado = document.querySelector(".selecionado");
    //cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    // console.log(cartaoAtual);
    //cartoes[cartaoAtual].classList.add('selecionado');
    mostrarCartao(cartaoAtual);
    
});