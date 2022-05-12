var inputDado = document.getElementById("campo1");
var campoCodigo = document.getElementById('campo2');
var botaoEncripta = document.querySelector('#botao1');
var imagem = document.querySelector('.hisokinha');

  function encriptar(){
   
    inputDado.addEventListener("input",function(event){
    
        event.preventDefault();

        var salvaTamanho = inputDado.value.length;
 
    if(salvaTamanho > 0) {
       
    var textoAtualizado = inputDado.value;
    
    textoAtualizado = textoAtualizado.replace(/e/gim, "enter");
    textoAtualizado = textoAtualizado.replace(/i/gim, "imes");
    textoAtualizado = textoAtualizado.replace(/a/gim, "ai");
    textoAtualizado = textoAtualizado.replace(/o/gim, "ober");
    textoAtualizado = textoAtualizado.replace(/u/gim, "ufat");
    textoAtualizado = textoAtualizado.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a')
    textoAtualizado = textoAtualizado.replace(new RegExp('[ÉÈÊ]','gi'), 'e')
    textoAtualizado = textoAtualizado.replace(new RegExp('[ÍÌÎ]','gi'), 'i')
    textoAtualizado = textoAtualizado.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o')
    textoAtualizado = textoAtualizado.replace(new RegExp('[ÚÙÛ]','gi'), 'u')
    textoAtualizado = textoAtualizado.replace(new RegExp('[Ç]','gi'), 'c')
    
    botaoEncripta.addEventListener("click",function(){
        campoCodigo.value = textoAtualizado;
        
        imagem.classList.add('fadeOut');
        imagem.classList.remove('volteHisoka');

  })}})};
encriptar();
