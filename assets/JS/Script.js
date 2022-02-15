//variaveis
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mensagem = document.querySelector('#mensagem')

//variaveis para verificar todos os campos e enviar o formulário
let emailOk = false
let assuntoOk = false
let mensagemOk = false

//função para validar o campo nome.
function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = '#B22222'
    
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color ="	#6959CD"
        emailOk = true
    }
}

//função para validar o campo assunto.
function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 20){
        txtAssunto.innerHTML = 'Texto muito grande. Digite no max 20 caracteres.'
        txtAssunto.style.color = '#B22222'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

//função para validar o campo Mensagem.
function validarMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')
    if(mensagem.value.length >= 500){
        txtMensagem.innerHTML = 'Texto muito grande. Digite no max 500 caracteres.'
        txtMensagem.style.color = '#B22222'
        txtMensagem.style.display = 'block'
    } else{
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

//função enviar do botão
function enviar(){
    if(emailOk == true && assuntoOk == true && mensagemOk == true){
        alert('Mensagem enviada com sucesso!')
    }else{
        alert('Preencha os campos corretamente anates de enviar.')
    }
}