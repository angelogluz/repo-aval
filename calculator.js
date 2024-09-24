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

// retorna o valor da potência entre os dois parâmetros
function power(v1, v2) {
    return Math.pow(v1, v2);
}

let v1 = 16;
let v2 = 4;

const v3 = 2;
const v4 = 3;

console.log(sum(v1, v2));    // Exemplo: 16 + 4 = 20
console.log(square(v1));     // Exemplo: Raiz quadrada de 16 = 4
console.log(sub(v1, v2)); 
console.log(div(v1, v2)); 
console.log(mult(v1, v2)); 
console.log(power(v3, v4)); // Exemplo: 2^3 = 8