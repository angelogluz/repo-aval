// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    return v1 + v2
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    return v1 / v2
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    return v1 * v2
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    return Math.sqrt(v1);
}

let v1 = 16;
let v2 = 4;

console.log(sum(v1, v2));    // Exemplo: 16 + 4 = 20
console.log(square(v1));     // Exemplo: Raiz quadrada de 16 = 4