console.log("Verificação de Primo.");
let n = parseInt(prompt("Digite um número: "));

let ehPrimo = true;

if (n <= 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}

if (ehPrimo) {
    console.log("O número " + n + " é primo.\n");
} else {
    console.log("O número " + n + " não é primo.\n");
}
