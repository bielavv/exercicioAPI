function IMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    const resultadoIMC = document.getElementById("IMC");
    const classificacao = document.getElementById("classific");

    resultadoIMC.textContent = `IMC: ${imc.toFixed(2)}`;



    let classific = "";
    if (imc < 18.5) classific = "Abaixo do peso";
    else if (imc < 24.9) classific = "Peso normal";
    else if (imc < 29.9) classific = "Sobrepeso";
    else if (imc < 34.9) classific = "Obesidade grau 1";
    else if (imc < 39.9) classific = "Obesidade grau 2";
    else if (imc > 39.9) classific = "Obesidade grau 3";
    else classific = "Dados inválidos";

    classificacao.textContent = classific;
}
