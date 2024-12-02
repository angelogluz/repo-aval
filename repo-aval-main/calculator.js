// retorna o valor da soma entre os dois parâmetros
function add(v1, v2) {
    if (typeof v1 !== 'number' || typeof v2 !== 'number') {
        throw new Error("Os parâmetros devem ser números.");
    }
    return v1 + v2;
}

// retorna o valor da subtração entre os dois parâmetross
function subtract(v1, v2) {
    if (typeof v1 !== 'number' || typeof v2 !== 'number') {
        throw new Error("Os parâmetros devem ser números.");
    }
    return v1 - v2;
}

// retorna o valor da divisão entre os dois parâmetros
function divide(v1, v2) {
    if (typeof v1 !== 'number' || typeof v2 !== 'number') {
        throw new Error("Os parâmetros devem ser números.");
    }
    if (v2 === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return v1 / v2;
}

// retorna o valor da multiplicação entre os dois parâmetros
function multiply(v1, v2) {
    if (typeof v1 !== 'number' || typeof v2 !== 'number') {
        throw new Error("Os parâmetros devem ser números.");
    }
    return v1 * v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function sqrt(v1) {
    if (typeof v1 !== 'number') {
        throw new Error("O parâmetro deve ser um número.");
    }
    if (v1 < 0) {
        throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
    }
    return Math.sqrt(v1);
}

// Testes das funções
console.log("Soma (2 + 3):", add(2, 3));                 // 5
console.log("Subtração (5 - 2):", subtract(5, 2));       // 3
console.log("Divisão (6 / 2):", divide(6, 2));           // 3
console.log("Multiplicação (4 * 5):", multiply(4, 5));   // 20
console.log("Raiz quadrada de 16:", sqrt(16));            // 4