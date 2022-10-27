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

     verificaNomes = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

    //verificando se o usuario digitou alguma coisa
     if(valorPrimeiroNome === '')
     {
        validandoErro(primeiroNome, "Preencha o campo");
     }
     else
     {
        validandoSucesso(primeiroNome);
     }

     if(valorSobreNome === '')
     {
        validandoErro(sobreNome, "Preencha o campo");
     }
     else
     {
        validandoSucesso(sobreNome);
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
     else
     {
        validandoSucesso(celular)
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