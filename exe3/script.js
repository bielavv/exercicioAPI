function validarUsuario() {
    let usuario = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    
    let resultado = ""

if  (usuario !== "" && email.includes("@") && senha.length >= 6){
    resultado += "validação concluida";
} else if(usuario === ""){
    resultado += "nome inválido";
} else if(!email.includes("@") || email === ""){
    resultado += "email inválido";
} else if(senha.length < 6){
    resultado += "senha inválida";
}
 document.getElementById("resultadoo").innerHTML = resultado;

    
}