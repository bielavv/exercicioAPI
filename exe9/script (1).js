function sortearTimes(listaDeNomes, numeroDeTimes) {
    const nomesEmbaralhados = [...listaDeNomes].sort(() => Math.random() - 0.5);
    const times = [];
    for (let i = 0; i < numeroDeTimes; i++) {
        times.push([]);
    }

    let timeAtual = 0;
    for (let nome of nomesEmbaralhados) {
        times[timeAtual].push(nome);
        timeAtual = (timeAtual + 1) % numeroDeTimes;
    }
    return times;
}

document.getElementById('sortearBtn').addEventListener('click', function() {
    const nomesInput = document.getElementById('nomesInput');
    const timesInput = document.getElementById('timesInput');
    const resultadoDiv = document.getElementById('resultado');
    const textoNomes = nomesInput.value.trim();
    const numeroDeTimes = parseInt(timesInput.value);
    
    if (!textoNomes || !numeroDeTimes || numeroDeTimes < 1) {
        resultadoDiv.textContent = 'Por favor, preencha todos os campos';
        return;
    }

    const listaDeNomes = textoNomes
        .split(/[\n,]/)
        .map(nome => nome.trim())
        .filter(nome => nome !== '');
    
    if (listaDeNomes.length === 0) {
        resultadoDiv.textContent = 'Por favor, digite pelo menos um nome';
        return;
    }
    
    if (numeroDeTimes > listaDeNomes.length) {
        resultadoDiv.textContent = 'O número de times não pode ser maior que o número de jogadores';
        return;
    }
    
    const times = sortearTimes(listaDeNomes, numeroDeTimes);
    let htmlResultado = '';
    times.forEach((time, index) => {
        htmlResultado += `
            <div class="time">
                <h3>Time ${index + 1} (${time.length} jogadores)</h3>
                <div class="jogadores">
                    ${time.map(jogador => `<span class="jogador">${jogador}</span>`).join('')}
                </div>
            </div>
        `;
    });
    resultadoDiv.innerHTML = htmlResultado;
});