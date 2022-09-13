// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {}

// retorna o valor da multiplicação entre os dois parâmetros
function mult(v1, v2) {}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

function sequencial(v1, v2) {
    let result = v1

    for (let i = 0; i < v2; i++) {
       const mult = result * v1
       result = mult
    }

    return result
}

console.log(sequencial(2, 4));
