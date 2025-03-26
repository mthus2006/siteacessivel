document.addEventListener('DOMContentLoaded',function(){
 let tamanhoAtualFonte= 1;
 const aumentaFonteBotao= document.getElementById('aumentar-fonte');

 aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    Document.body.style.fontSize= '${tamanhoAtualFonte}rem',
})
const diminuirFontebotao= document.getElementById('diminuir-fonte');
diminuirFontebotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.styleSize
}
})
