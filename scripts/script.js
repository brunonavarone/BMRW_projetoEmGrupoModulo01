function verifcaNome()
{
    nome = document.getElementById("primeiroNome").value;
    
}


function validaEmail()
{
    email = document.getElementById("email").value;
    while(true)
    {
        if(email.match(/@/))
        {
            break;
        }
        else
        {
            alert("Você digitou um e-mail inválido!")
            //email = prompt("Digite um e-mail válido: ");
        }

    }
}