//Aula 1

console.log("Hello World!");
// console = objeto (nesse caso é um objeto de escopo GLOBAL, onde em qualquer lugar sempre vai existir)
// .log = função (cada função tem parâmetros, onde posso pôr uma quantidade limitada ou ilimitada, dependendo da função)
// ("Hello World!") = parâmetro que será executado no console


// uso de operadores:

const a = 2;
const b = 4;

const mult = a * b;
console.log(mult);

// uso de funções para os cálculos:

// soma
function soma(num1, num2) {
    return num1 + num2;
} 
console.log(soma(1, 2));

// multiplicação
function multiplicacao(number1, number2) {
    return number1 * number2;
}
console.log(multiplicacao(2, 3));

