let n = prompt("Número de termos:");

let a = 0;
let b = 1;
let i = 2;
let c;

if (n == 1) {
    console.log(a);
} else {
    console.log(a + " " + b);
}

while (i < n) {
    c = a + b;
    console.log(" " + c);
    a = b;
    b = c;
    i++;
}