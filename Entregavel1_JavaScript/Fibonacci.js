console.log("Sequência de Fibonacci.");
let n;

do {
    n = parseInt(prompt("Digite quantos termos deseja gerar (N > 1): "));
    if (n <= 1) {
        console.log("N precisa ser maior que 1. Tente novamente.");
    }
} while (n <= 1);

let a = 0, b = 1;
let sequencia = "";

for (let i = 0; i < n; i++) {
    sequencia += a + " ";
    let proximo = a + b;
    a = b;
    b = proximo;
}

console.log("Sequência: " + sequencia + "\n");
