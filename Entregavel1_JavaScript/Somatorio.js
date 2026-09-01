console.log("Cálculo de Somatório.");
let n = parseInt(prompt("Digite quantos números deseja somar: "));

let soma = 0;
for (let i = 1; i <= n; i++) {
    let valor = parseInt(prompt("Digite o número " + i + ": "));
    soma += valor;
}

console.log("A soma do conjunto é " + soma + ".\n");
