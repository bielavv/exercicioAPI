function contarVogaisEConsoantes() {
   
    const textoElemento = document.getElementById("analise");
    const palavraOriginal = textoElemento.value; 
    const vogais = 'aeiouáéíóúãõäëïöü'; 
    let contagemVogais = 0;
    let contagemConsoantes = 0;


    const palavraNormalizada = palavraOriginal.toLowerCase().replace(/\s/g, '');


    for (let i = 0; i < palavraNormalizada.length; i++) {
        const caractere = palavraNormalizada[i];
        
  
        if (vogais.includes(caractere)) {
            contagemVogais++;
        } else if (caractere >= 'a' && caractere <= 'z') { 
            contagemConsoantes++;
        }

    }

    document.getElementById("vogais").innerHTML = contagemVogais;
    document.getElementById("consoantes").innerHTML = contagemConsoantes;
}
