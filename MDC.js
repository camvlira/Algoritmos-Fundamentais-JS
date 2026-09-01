let a = parseInt(prompt("Digite o primeiro número inteiro:"));
let b = parseInt(prompt("Digite o segundo número inteiro:"));

function mdc(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

console.log(`O Máximo divisor comum de ${a} e ${b} é: ${mdc(a, b)}`);