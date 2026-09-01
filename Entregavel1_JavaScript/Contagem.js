console.log("Contagem de valores.");
let n = parseInt(prompt("Digite o valor de N (quantidade de números): "));

let numeros = [];
for (let i = 0; i < n; i++) {
    numeros.push(parseInt(prompt("Digite o número " + (i + 1) + ": ")));
}

let primeiro = numeros[0];
let contador = 0;

for (let valor of numeros) {
    if (valor >= primeiro && valor <= n) {
        contador++;
    }
}

console.log("Quantidade de valores entre " + primeiro + " (inclusive) e " + n + " (inclusive): " + contador + "\n");
