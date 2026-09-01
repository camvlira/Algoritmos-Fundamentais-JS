console.log("Cálculo do MDC.");
let a = parseInt(prompt("Digite o primeiro número: "));
let b = parseInt(prompt("Digite o segundo número: "));

let x = a, y = b;

while (y !== 0) {
    let resto = x % y;
    x = y;
    y = resto;
}

console.log("O MDC entre " + a + " e " + b + " é " + x + ".\n");
