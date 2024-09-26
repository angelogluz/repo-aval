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

// Calcula a potência de um número base elevado ao expoente
function power(base, exponent) {
  return Math.pow(base, exponent);
}

let v1 = 16;
let v2 = 4;

console.log(sum(v1, v2)); // Exemplo: 16 + 4 = 20
console.log(square(v1)); // Exemplo: Raiz quadrada de 16 = 4
console.log(sub(v1, v2));
console.log(div(v1, v2));
console.log(mult(v1, v2));

// Função para testar a função power
function logPowerTest(base, exponent, expectedResult) {
  const result = power(base, exponent);
  console.log(`${base}^${exponent} = ${result} (Esperado: ${expectedResult})`);
}

console.log('\n' + '='.repeat(28));
console.log('Testes da função power:' + '\n');

logPowerTest(2, 3, 8);
logPowerTest(3, 2, 9);
logPowerTest(4, 3, 64);
logPowerTest(5, 2, 25);

console.log('='.repeat(28));
