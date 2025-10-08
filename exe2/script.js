
function GerarTabela() {
    // pega o número digitado
    let numero = document.getElementById("numero").value;

    // inicializa a string
    let resultado = "";

    for (let i = 1; i <= 9; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
    }

    // exibe no parágrafo
    document.getElementById("resultado").innerHTML = resultado;
}
