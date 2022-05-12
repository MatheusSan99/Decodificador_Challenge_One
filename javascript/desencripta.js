var botaoDesencripta = document.querySelector('#botao2');

function desencriptar() {
    inputDado.addEventListener("input",function(){
    botaoDesencripta.addEventListener("click",function(event){
        event.preventDefault();
        
       var  salvaConteudo = inputDado.value;
        
        salvaConteudo = salvaConteudo.replace(/enter/gim, "e");
        salvaConteudo = salvaConteudo.replace(/ober/gim, "o");
        salvaConteudo = salvaConteudo.replace(/ufat/gim, "u");
        salvaConteudo = salvaConteudo.replace(/ai/gim, "a");
        salvaConteudo = salvaConteudo.replace(/imes/gim, "i");
  
        inputDado.value = salvaConteudo;

    })})}

    desencriptar();

