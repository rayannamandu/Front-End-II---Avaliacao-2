function inserir(){
    var nome = document.getElementById("iptNome");

    var email = document.getElementById("iptEmail");

    var mensagem = document.getElementById("txtMensagem");

    var obj = {};
    obj.nome = nome.value;
    obj.email = email.value;
    obj.mensagem = mensagem.value;

    inserirMensagem(obj);

    nome.value = "";
    email.value = "";
    mensagem.value = "";

    window.alert("Mensagem enviada")
}

function login(){
    var email = document.getElementById("iptEmailLogin");

    var senha = document.getElementById("iptSenhaLogin");

    var objLogin = {};
    objLogin.email = email.value;
    objLogin.senha = senha.value;

    var validacao = validarUsuario(objLogin);

    if (validacao == true){
        window.open("mensagem.html");
    } else {
        window.alert("Senha Incorreta");
    }
}

function load(){
    
    var mensagens = obterMensagens();

    var tabela = document.getElementById("tabela");
    
    for (var i = 0; i < mensagens.length; i++){
    var linha = document.createElement("tr");

    var colunaNome = document.createElement("td");
    colunaNome.innerHTML = mensagens[i].nome;

    var colunaEmail = document.createElement("td");
    colunaEmail.innerHTML = mensagens[i].email;

    var colunaMensagem = document.createElement("td");
    colunaMensagem.innerHTML = mensagens[i].mensagem;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaEmail);
    linha.appendChild(colunaMensagem);
    tabela.appendChild(linha);
    }
}
