// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) { }

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    if (!v1 || !v2 || !parseInt(v1) || !parseInt(v2))
        throw new Error("Insira dois números válidos e diferentes de zero.");

    if (v1 % v2 == 0) return v1 / v2;

    return (v1 / v2).toFixed(1);
}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) { }

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) { }

console.log(sum(v1, v2));
console.log(sub(6, 3));
console.log(div(4, 4));