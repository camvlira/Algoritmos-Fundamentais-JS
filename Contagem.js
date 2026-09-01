let n = prompt("Número de notas:");
let nota;
let contagem = 0;
let i = 0;

while (i < n) {
    i = i + 1;

    nota = prompt("Nota do aluno:");

    if (nota >= 50) {
        contagem = contagem + 1;
    }
}

console.log("Número de aprovações: " + contagem);