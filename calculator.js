// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {}

// retorna o valor da subtração entre os dois parâmetros
function sub(v1, v2) {}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {}

// Kaleu retorna o valor da multiplicação entre os dois parâmetros
function mult(a, b) {
    if(a < b){
        return mult(b, a);
    }else if (b != 0){
        return a + mult(a, b - 1);
    }else{
        return 0;
    }
}
console.log(mult(10, 5));
console.log(mult(7, 6));



// retorna o valor da raiz quadrada do valor recebido por parâmetro
function square(v1) {}

console.log(sum(v1, v2));
