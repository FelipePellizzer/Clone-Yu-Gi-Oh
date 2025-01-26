//Constantes

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

//Avancar

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;
  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao();
});

//Voltar

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;
  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao();
});

//Funcoes

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

