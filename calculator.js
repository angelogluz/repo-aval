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
    return v1*v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    return Math.sqrt(v1);
}

console.log(`1 + 2 = ${sum(1, 2)}`);
console.log(`2 - 1 = ${sub(2, 1)}`);
console.log(`4 / 2 = ${div(4, 2)}`);
console.log(`2 * 2 = ${mult(4,2)}`);
console.log(`Raíz quadrada 9: ${square(9)}`);