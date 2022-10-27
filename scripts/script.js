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
        validandoErro(primeiroNome);
     }
     else
     {
        validandoSucesso(primeiroNome);
     }

     if(valorSobreNome === '')
     {
        validandoErro(sobreNome);
     }
     else
     {
        validandoSucesso(sobreNome);
     }

     if(valorEmail === '')
     {
        validandoErro(email);
     }
     else
     {
        validandoSucesso(email);
     }

     if(valorCelular === '')
     {
        validandoErro(celular);
     }
     else
     {
        validandoSucesso(celular)
     }
}

function validandoErro(input)
{
    const caixaInput = input.parentElement;

    caixaInput.className = "caixa-input erro";
}

function validandoSucesso(input)
{
    const caixaInput = input.parentElement;

    caixaInput.className = "caixa-input sucesso";
}