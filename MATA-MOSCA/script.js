let altura = 0
let largura = 0

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
  //console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

  //remover o mosquito anterior caso exista

  var posicaoX = Math.floor(Math.random() * largura) - 100
  var posicaoY = Math.floor(Math.random() * altura) - 100

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  console.log(posicaoY, posicaoX)

  //criar o elemento html
  var mosquito = document.createElement('img')
  mosquito.src = 'img/mosca.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'

  document.body.appendChild(mosquito)
}

setInterval(function() {
  posicaoRandomica()
}, 1000)


function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3)
  switch(classe) {
  case 0:
    return 'mosquito1'

  case 1:
    return 'mosquito2'

  case 2:
    return 'mosquito3'
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2)
  switch(classe) {
  case 0:
    return 'ladoA'

  case 1:
    return 'ladoB'
  }
}