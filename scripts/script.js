const formulario = document.getElementById('form');
const primeiroNome = document.getElementById('primeiroNome');
const sobreNome = document.getElementById('sobreNome');
const email = document.getElementById('email');
const celular = document.getElementById('numero');


//resetando o compartamento padrao da pagina de formulários
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    verificaInputs();
})

function verificaInputs()
{
    //funcao .trim() do js remove todos os espaçamentos em branco, retornando apenas o que foi digitado
     const valorPrimeiroNome = primeiroNome.value.trim();
     const valorSobreNome = sobreNome.value.trim();
     const valorEmail = email.value.trim();
     const valorCelular = celular.value.trim();

     

    //verificando se o usuario digitou alguma coisa
     if(valorPrimeiroNome === '')
     {
         validandoErro(primeiroNome, "Preencha o campo");
     }

     //verificando se o que foi digitado foi apenas letras
     else if (valorPrimeiroNome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) && valorPrimeiroNome.length <= 20)
     {
         validandoSucesso(primeiroNome);
     }

     //verificando se o tamanho da resposta é maior que 20
     else if (valorPrimeiroNome.length > 20)
     {
         validandoErro(primeiroNome, "O máximo de caracteres é 20");
     }

     else 
     {
         validandoErro(primeiroNome, "Digite apenas letras");
      
     }

     if(valorSobreNome === '')
     {
        validandoErro(sobreNome, "Preencha o campo");
     }

     else if (valorSobreNome.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/) && valorSobreNome.length <= 20)
     {
         validandoSucesso(sobreNome);
     }

      //verificando se o tamanho da resposta é maior que 20
     else if (valorSobreNome.length > 20)
     {
         validandoErro(sobreNome, "O máximo de caracteres é 20");
     }

     else
     {
         validandoErro(sobreNome, "Digite apenas letras");
     }

     if(valorEmail === '')
     {
        validandoErro(email, "Preencha o campo");
     }
     else
     {
        validandoSucesso(email);
     }

     if(valorCelular === '')
     {
        validandoErro(celular, "Preencha o campo");
     }

     else if(valorCelular.match(/[0-9]/) && valorCelular.length == 12 || valorCelular.length == 11)
     {
        validandoSucesso(celular)
     }

     else if(valorCelular.length < 11)
     {
         validandoErro(celular, "O minimo de digitos minimo é 11");
     }

     else if(valorCelular.length > 12)
     {
         validandoErro(celular, "O máximo de digitos é 12");
     }

     else
     {
        validandoErro(celular, "Digite apenas numeros");
     }
}

function validandoErro(input, mensagem)
{
    const caixaInput = input.parentElement;
    const small = caixaInput.querySelector('small')

    small.innerText = mensagem;

    caixaInput.className = "caixa-input erro";
}

function validandoSucesso(input)
{
    const caixaInput = input.parentElement;

    caixaInput.className = "caixa-input sucesso";
}