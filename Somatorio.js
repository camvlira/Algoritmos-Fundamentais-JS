let n = prompt("Quantidade de números:");
let numero;
let soma = 0;
let i = 0;

while (i < n) {
    i = i + 1;
    numero = parseInt(prompt("Número:"));
    soma = soma + numero;
}

console.log("Soma = " + soma);
