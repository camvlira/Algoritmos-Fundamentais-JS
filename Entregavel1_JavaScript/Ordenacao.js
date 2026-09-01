console.log("Ordenação de números (Quicksort).");
let n = parseInt(prompt("Digite quantos números deseja ordenar: "));

let numeros = [];
for (let i = 0; i < n; i++) {
    numeros.push(parseInt(prompt("Digite o número " + (i + 1) + ": ")));
}

function particionar(arr, inicio, fim) {
    let pivo = arr[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (arr[j] <= pivo) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp = arr[i + 1];
    arr[i + 1] = arr[fim];
    arr[fim] = temp;

    return i + 1;
}

function quicksort(arr, inicio, fim) {
    if (inicio < fim) {
        let posPivo = particionar(arr, inicio, fim);
        quicksort(arr, inicio, posPivo - 1);
        quicksort(arr, posPivo + 1, fim);
    }
}

quicksort(numeros, 0, numeros.length - 1);

console.log("Números ordenados: " + numeros.join(" ") + "\n");
