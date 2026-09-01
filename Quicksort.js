let entrada = prompt("Digite os números separados por vírgula (ex: 5,3,8,1,9): ");

let array = entrada.split(",").map(item => parseInt(item.trim()));

function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];

    let menores = [];
    let iguais = [];
    let maiores = [];

    for (let numero of arr) {
        if (numero < pivot) {
            menores.push(numero);
        } else if (numero > pivot) {
            maiores.push(numero);
        } else {
            iguais.push(numero);
        }
    }

    return [...quicksort(menores), ...iguais, ...quicksort(maiores)];
}

let resultado = quicksort(array);

console.log("Array original: " + array.join(", "));
console.log("Array ordenado: " + resultado.join(", "));
alert("Array ordenado: " + resultado.join(", "));