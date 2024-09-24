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
// Calcula a potência de um número base elevado ao expoente
function power(base, exponent) {
    return Math.pow(base, exponent);
}

let v1 = 16;
let v2 = 4;

const exponent = 3;
const exponent2 = 2;
const base = 2;
const base2 = 3;
const base3 = 4;
const base4 = 5;

console.log(sum(v1, v2));    // Exemplo: 16 + 4 = 20
console.log(square(v1));     // Exemplo: Raiz quadrada de 16 = 4
console.log(sub(v1, v2)); 
console.log(div(v1, v2)); 
console.log(mult(v1, v2)); 

//testes manuais da função power
console.log(power(base, exponent)); // resultado esperado 8
console.log(power(base2, exponent)); // resultado esperado 9
console.log(power(base3, exponent2)); // resultado esperado 16
console.log(power(base4, exponent2)); // resultado esperado 25
console.log(power(base4, exponent)); // resultado esperado 125