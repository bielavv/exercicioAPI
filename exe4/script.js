function getRandomArray(qtd) {
    let array = [];
    for (let i = 0; i < qtd; i++) {
        let n = Math.floor(Math.random() * 50) + 1;
        array.push(n);
    }
    return array;
}

function resultados(){
let numeros = getRandomArray(10);
let maior = Math.max(...numeros);
let menor = Math.min(...numeros);
let media = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / numeros.length;

document.getElementById("numeros").innerHTML = "Numeros gerados: " + numeros;
document.getElementById("maior").innerHTML = "Maior número: "+ maior;
document.getElementById("menor").innerHTML = "Menor número: " + menor;
document.getElementById("media").innerHTML = "Média: "+ media.toFixed(0);
}
