
let anoNovo = new Date("Jan 1, 2026 00:00:00").getTime();


let x = setInterval(function() {
    let agora = new Date().getTime();
    let distancia = anoNovo - agora;


    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);


    document.getElementById("contador").innerHTML = dias + "d " + horas + "h "
        + minutos + "m " + segundos + "s ";


    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "Feliz Ano Novo! 🎉";
    }
}, 1000);
