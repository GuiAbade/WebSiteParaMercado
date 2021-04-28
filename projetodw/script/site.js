function troca(){
    window.location.href="carrinho.html";
}

function troca1(){
    var qtd = parseFloat(document.getElementById('quant').value);
    if(qtd != 0){
        window.location.href="adicionado.html";
    }
    else{
        window.alert("Sem produtos");
    }
}

function compra(){
        window.alert("Você precisa efetuar o login");
        window.location.href="telalogin.html";
}

function troca2(){
    window.location.href="carrinhologado.html";
}

function sair(){
    window.location.href="index.html";
}


function validarFormulario(){
    var form = formulario;
    if(form.nomeCompleto.value == ""){
        alert("Nome completo não informado");
        return false;
    }  
    if(form.cpf.value == ""){
        alert("Cpf não informado");
        return false;
    }
    if(form.email.value == ""){
        alert("Email não informado");
        return false;
    }
    if(form.senha.value == ""){
        alert("Senha não informado");
        return false;
    }
    if(form.confirmasenha.value == ""){
        alert("Confirmar Senha não informado");
        return false;
    }
    if(form.confirmasenha.value != form.senha.value){
        alert("Senhas diferentes");
        return false;
    }
    if(form.DD.value == ""){
        alert("Dia de nascimento não informado");
        return false;
    }
    if(form.MM.value == ""){
        alert("Mês de nascimento não informado");
        return false;
    }
    if(form.AAAA.value == ""){
        alert("Ano de nascimento não informado");
        return false;
    }
    if(form.numeroDoCartao.value == ""){
        alert("Número do cartão não informado");
        return false;
    }
    if(form.CVC.value == ""){
        alert("Código de verificação do cartão(CVC) não informado");
        return false;
    }

    if(form.mes.selectedIndex==0) {
        alert("Informe o mês");
        return false;
  }

    if(form.ano.selectedIndex==0){
            alert("Informe o ano");
            return false;
    }

    if(form.metodo[0].checked == false && form.metodo[1].checked == false){
            alert("Informe o cartão");
            return false; 
    }
    if(form.gender[0].checked == false && form.gender[1].checked == false){
        if(form.gender[2].checked == false){
            alert("Informe o gênero");
            return false; 
        }    
    }

    if(form.termo.checked == false){
        alert("Aceite os termos");
        return false; 
    }
}

function validarEndereco(){
    var form = formulario02;
    if(form.nomeDestinatario.value == ""){
        alert("Nome Destinatário não informado"); 
        return false
    }  
    if(form.telefone.value == ""){
        alert("Telefone não informado"); 
        return false
    }
     if(form.cep.value == ""){
         alert("CEP não informado"); 
         return false
    }
    if(form.endereco.value == ""){
         alert("Endereço não informado"); 
         return false
    }
    if(form.numeroDaResidencia.value == ""){
        alert("Número da residência não informado"); 
        return false
    }
    if(form.complemento.value == ""){
        alert("Complemento não informado"); 
        return false
    }
    if(form.bairro.value == ""){
        alert("Bairro não informado"); 
        return false
    }
    if(form.cidade.value == ""){
        alert("Cidade não informado"); 
        return false
    }
    if(form.estado.value == ""){
        alert("Estado não informado"); 
        return false
    }

}

function calculo() {
    var qtd = parseFloat(document.getElementById('quant').value);
    var preco = parseFloat(document.getElementById('preco').innerText);
    var total = qtd * preco;

    document.querySelector("#total").innerHTML = total.toString();
}

function remove() {
    document.getElementById('quant').selectedIndex = 4;
    document.querySelector("#total").innerHTML = "0.00";
}


function validalogin(){
    var form = formulario03;
    if(form.email.value == ""){
        alert("Email não informado");
        return false;
    }
    if(form.senha.value == ""){
        alert("Senha não informado");
        return false;
    }
}

function rastrear() {
    if(document.getElementById('status').innerText == "a caminho"){
        alert("O produto está a caminho do endereço");
    }
    if(document.getElementById('status').innerText == "aguardando"){
        alert("Aguardando pagamento");
    }
    if(document.getElementById('status').innerText == "entregue"){
        alert("O produto foi entregue");
    }
}

function rastrear1() {
    if(document.getElementById('status1').innerText == "a caminho"){
        alert("O produto está a caminho do endereço");
    }
    if(document.getElementById('status1').innerText == "aguardando"){
        alert("Aguardando pagamento");
    }
    if(document.getElementById('status1').innerText == "entregue"){
        alert("O produto foi entregue");
    }
}

function avaliacao() {
    alert("Avaliação enviada");
    window.location.href="telalogado.html";
}

function btnavalia(){
    window.location.href="avaliacao.html";
}

function pag() {
    alert("Pagamento Adicionado");
    window.location.href="telalogado.html";
}

function alterar() {
    document.getElementById('nome').removeAttribute("readonly");
}

function alterar1() {
    document.getElementById('cpf').removeAttribute("readonly");
}

function alterar2() {
    document.getElementById('email').removeAttribute("readonly");
}

function alterar3() {
    document.getElementById('senha').removeAttribute("readonly");
    document.getElementById('confirma').removeAttribute("readonly");
}

function retorno() {
    var form = formtroca;

    if(form.nome.value != "Fulano de tal"){
        alert("Nome alterado");
        return true;
    }

    if(form.email.value != "fulanodetal@compraceerta.com"){
        alert("Email alterado");
        return true;
        }

    if(form.senha.value != "senha"){
        if(form.senha.value == form.confirmasenha.value){
        alert("Senha alterada");
        return true;
        }
    }

    if(form.senha.value != "senha"){
        if(form.senha.value != form.confirmasenha.value){
            alert("Senhas diferentes")
            return false;
        }
    }

    if(form.cpf.value != "000.000.000-00"){
        alert("CPF alterado");
        return true;
    }
            
    if(form.nome.value == "Fulano de tal" && form.email.value == "fulanodetal@compraceerta.com"){
        if(form.senha.value == "senha" && form.cpf.value == "000.000.000-00"){
            alert("Nenhuma modificação");
            return true;
            }
    }
           

        
    
}