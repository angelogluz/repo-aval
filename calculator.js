const prompt = require('prompt-sync')();

// solicita ao usuário 2 números para o calculo
const v1 = Number(prompt("Qual o número 1? "));
const v2 = Number(prompt("Qual o número 2? "));

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {
    return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    if (v2 === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return v1 / v2;
}


// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {
    return v1 * v2;
}
// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {
    return Math.sqrt(v1);
}
console.log('Soma:', sum(v1, v2));
console.log('Subtração:', sub(v1, v2));
console.log('Divisão:', div(v1, v2));
console.log('Multiplicação:', mult(v1, v2));
console.log('Raiz quadrada do primeiro número:', square(v1));

