function encontrarMaiorPalavra(frase) {
    const palavras = frase.split(' ');
    let maiorPalavra = '';
    
    for (let palavra of palavras) {
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra;
        }
    }
    return maiorPalavra;
}

document.getElementById('encontrarBtn').addEventListener('click', function() {
    const fraseInput = document.getElementById('fraseInput');
    const resultadoDiv = document.getElementById('resultado');
    const frase = fraseInput.value.trim();
    
    if (frase === '') {
        resultadoDiv.textContent = 'Por favor, digite uma frase.';
        return;
    }
    
    const maiorPalavra = encontrarMaiorPalavra(frase);
    resultadoDiv.textContent = `Maior palavra: "${maiorPalavra}"`;
});