function ehPrimo(n) {
    var n = parseInt(prompt("Qual número você deseja testar se é primo? "));

    if (n < 2) {
        console.log("O número "+n+" é primo");
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log("O número "+n+" é primo");
        }
    }

    console.log("O número "+n+" é primo");
}


