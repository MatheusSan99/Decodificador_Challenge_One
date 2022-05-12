  var botaoCopiar = document.querySelector('#botao3');
  var botaoColar = document.querySelector('#botao4');
  var botaoLimpar = document.querySelector("#botao5");

    function botaoCopia(){
  
    botaoCopiar.addEventListener("click",function(event){
    event.preventDefault();
    var copiaDado = campoCodigo.value;
    var copiaFeita = copiaDado;
    botaoColar.addEventListener("click",function(){
        inputDado.value = copiaFeita;
        console.log(copiaDado);
        console.log(copiaFeita);

  })})}
    function limpeiTudo() {
        var limpaTela = "";
        botaoLimpar.addEventListener("click",function(){
            var limpaTudo = "";
            inputDado.value = limpaTudo;
            campoCodigo.value =limpaTudo;
            imagem.classList.remove("fadeOut");
            imagem.classList.add("volteHisoka");
        })}
  limpeiTudo();
  botaoCopia();