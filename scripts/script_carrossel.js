contador = 1;
//verificando se o radio1 foi "apertado"
document.getElementById("radio1").checked = true;

//funcao que chama uma funcao com um intervalo de tempo passado como parametro 
setInterval( function(){
proximaImagem();
}, 4000)

//funcao que troca a imagem de forma automática 
function proximaImagem()
{
    contador++;
    if(contador >5)
    {
        contador =1;
    }

    document.getElementById("radio"+contador).checked = true;
}