const valores = document.querySelectorAll('input')
const capoResultado = document.querySelector('#resultado')
let conta

function botao(value) {
  conta = capoResultado.value += value
}

function limpar() {
  capoResultado.value = ''
}

function calcula() {
  const resultado = eval(conta)
  capoResultado.value = resultado
}

function remover() {
  const palavraCompleta = capoResultado.value
  const ultimaLetra = palavraCompleta.substring(
    0,
    capoResultado.value.length - 1
  )
  capoResultado.value = ultimaLetra
}