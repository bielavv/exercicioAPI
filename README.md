
1. Contador Regressivo
O Desafio: Criar uma função que calcula e exibe quantos dias, horas, minutos e segundos faltam para uma data futura (por exemplo, o próximo Ano Novo).
Conceitos de JS em Foco: Funções, manipulação do objeto Date, operadores matemáticos para converter milissegundos em outras unidades de tempo.
Exemplo de Saída no Console: Faltam: 250 dias, 10 horas, 5 minutos, 15 segundos.
2. Calculadora de IMC (Índice de Massa Corporal)
O Desafio: Desenvolver uma função calcularIMC(peso, altura) que recebe o peso (em kg) e a altura (em metros) de uma pessoa. A função deve calcular o IMC e retornar uma string indicando o valor e a classificação (ex: "Abaixo do peso", "Peso normal", "Sobrepeso").

Conceitos de JS em Foco: Funções com parâmetros e retorno, operadores matemáticos, e estruturas condicionais (if, else if, else) para determinar a classificação.

Exemplo de Chamada: console.log(calcularIMC(70, 1.75))

3. Tabuada Dinâmica
O Desafio: Criar uma função gerarTabuada(numero) que recebe um número como parâmetro e imprime no console a sua tabuada de 1 a 10.

Conceitos de JS em Foco: Estruturas de repetição (for), funções com parâmetros, operadores matemáticos e template literals para formatar a saída.

4. Validador de Dados de Usuário
O Desafio: Construir uma função validarUsuario(usuario) que recebe um objeto (ex: { nome: "Ana", email: "ana@email.com", senha: "123" }). A função deve verificar se o nome não está vazio, se o email contém "@" e se a senha tem mais de 6 caracteres. Ela deve retornar true se tudo estiver correto, ou um array com as mensagens de erro caso contrário.

Conceitos de JS em Foco: Funções, objetos, condicionais (if), operadores lógicos (&&, ||), e propriedades de string (.length, .includes()).

Exemplo de Retorno com Erro: ["Senha precisa ter mais de 6 caracteres."]

5. Analisador de Números em um Array
O Desafio: Criar uma função analisarNumeros(arrayDeNumeros) que recebe um array de números e retorna um objeto contendo o maior número, o menor número e a média de todos os números do array.

Conceitos de JS em Foco: Estruturas de repetição (for ou forEach), condicionais para encontrar o maior/menor valor, operadores matemáticos para calcular a média e manipulação de arrays.

Exemplo de Retorno: { maior: 9, menor: 1, media: 5 }

6. Conversor de Temperatura
O Desafio: Escrever duas funções: celsiusParaFahrenheit(celsius) e fahrenheitParaCelsius(fahrenheit). Cada uma deve receber uma temperatura e retornar o valor convertido.

Conceitos de JS em Foco: Criação de funções simples e reutilizáveis, e aplicação de fórmulas matemáticas com operadores.

Exemplo de Chamada: console.log(celsiusParaFahrenheit(30))

7. Contador de Vogais e Consoantes
O Desafio: Desenvolver uma função contarLetras(palavra) que recebe uma string e retorna um objeto mostrando quantas vogais e quantas consoantes a palavra possui.

Conceitos de JS em Foco: Estruturas de repetição (for...of), manipulação de strings (.toLowerCase()), condicionais ou o método .includes() para verificar se uma letra é uma vogal.

Exemplo de Retorno para "Abacaxi": { vogais: 4, consoantes: 3 }

8. Gerador de Códigos de Cupom
O Desafio: Criar uma função gerarCupom(tamanho) que gera um código alfanumérico aleatório com o tamanho especificado. O código deve ser uma string.

Conceitos de JS em Foco: Funções, estruturas de repetição (for), Math.random() e manipulação de strings ou arrays para selecionar caracteres aleatórios de um conjunto pré-definido (ex: ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789).

Exemplo de Retorno para gerarCupom(8): "X7B3K9P2"

9. Localizador da Maior Palavra
O Desafio: Construir uma função encontrarMaiorPalavra(frase) que recebe uma frase (string) e retorna a maior palavra contida nela.

Conceitos de JS em Foco: Manipulação de strings (.split()), estruturas de repetição (for...of ou forEach), e condicionais para comparar o tamanho (.length) das palavras.

Exemplo de Retorno para "O desenvolvimento de APIs é fundamental": "desenvolvimento"

10. Sorteador de Times (Versão Lógica)
O Desafio: Criar uma função sortearTimes(listaDeNomes, numeroDeTimes) que recebe um array de nomes e um número. A função deve embaralhar a lista de nomes e retornar um novo array com os times divididos (um array de arrays).

Conceitos de JS em Foco: Funções, manipulação avançada de arrays (.sort() com função de comparação para embaralhar, .slice(), .push()), e estruturas de repetição para distribuir os jogadores.

Exemplo de Retorno: [ ['Ana', 'Carlos'], ['Bia', 'Daniel'] ]
