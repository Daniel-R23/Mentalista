var tentativas = 3;
var numeroSecreto = parseInt(Math.random()*11)

function Chutar() {
  var elementoResultado = document.getElementById("resultado")
  var chute = parseInt(document.getElementById("valor").value)
  var textoTent = document.getElementById("numtent")
  if(tentativas>0){
    if(chute == numeroSecreto){
      elementoResultado.innerHTML="Você acertou!"
    }else if(chute > 10 || chute < 0){
      elementoResultado.innerHTML="Você deve digitar um número de 0 a 10"
    }else{
      if(chute<numeroSecreto){
        elementoResultado.innerHTML="Você errou! O número secreto é maior que esse"
      }else{
        elementoResultado.innerHTML="Você errou! O número secreto é menor que esse"
      }
    }
    tentativas--
    textoTent.innerHTML=tentativas
  }else{
    elementoResultado.innerHTML="Acabaram suas tentativas!"
  }
}
