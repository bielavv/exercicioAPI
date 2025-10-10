function conversorcelsiusPARAf(){
    let cel = document.getElementById("celsius").value;
    let resultado;

    cel = parseFloat(cel);

    if(cel != "" && !isNaN(cel)){
    resultado = (cel * 1.8) + 32;   
     document.getElementById("resultado1").innerHTML = resultado + "°F";
}else{
    document.getElementById("resultado1").innerHTML = "Insira um valor válido";
    }
}

function conversorfahrenheitPARAc(){
    let fah = document.getElementById("fahrenheit").value;
    let resultadoO;

    fah = parseFloat(fah);

    if(fah != "" && !isNaN(fah)){
    resultadoO = (fah - 32) / 1.8;   
     document.getElementById("resultado2").innerHTML = resultadoO + "°C";
}else{
    document.getElementById("resultado2").innerHTML = "Insira um valor válido";
    }

}