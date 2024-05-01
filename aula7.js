// Aula 7
// ARRAYS
// estrutura onde podemos armazenar uma lista de valores.

/* FORMAS DE NOMEAR:
const array1 = new Array();

const arry2 = [];
*/

/* FORMAS DE ACESSAR UM ÍNDICE DE UMA ARRAY:
const arr = [1, 2, 3, 4, 5];
const primeiro = arr[0];

OU 

const arr = [1, 2, 3, 4, 5];
const primeiro = arr.at(0);
*/

// DESAFIOS
// FÁCEIS
// 1 //

let arrTest = [2, 72, 10];
function inverteArr(arr) {
    let arrInvertido = [];

    while (arrInvertido.length != arr.length) {
        const indiceAtual = (arr.length - arrInvertido.length) - 1;
        let indiceIvertido = arrInvertido.length;
        
        arrInvertido[indiceIvertido] = arr[indiceAtual];
    }

    return arrInvertido;
}
console.log(inverteArr(arrTest));
//isso tudo tem a mesma lógica, do que usar o ".reverse"!
console.log(arrTest.reverse());



// 2 //
//forma 1 de fazer:
let arr = [240, 10, 50];
function array(arrayInserida, item) {
    arrayInserida[arrayInserida.length] = item;
}
console.log(arr);
console.log(array([20])); // retorna undefined pois não está retornando NADA

// outra forma de fazer:
function array2(arrayInserida, item) {
    return [...arrayInserida, item];
}
console.log(array2([33], 7));

// forma fácil:
console.log(arr.push(6));


// MÉDIO
// 1 //
function retornaMaior(number) {
    let maiorValor = 0;

    for (let i = 0; i < number.length; i++) {
        if (number[i] > maiorValor) {
            maiorValor = number[i];
        }
    }
    return maiorValor;
}
console.log(retornaMaior([22, 445, 3]));

// forma fácil
console.log(Math.max(20, 0, 3));


// 2 //
function retornaMenor(number) {
    let menorValor = number[0];

    for (let i = 0; i < number.length; i++) {
        if (number[i] < menorValor) {
            menorValor = number[i];
        }
    }
    return menorValor;
}
console.log(retornaMenor([22, 445, 3]));
// forma fácil
console.log(Math.min(610, 7, 2));

// 3 //

function retornaUnicos(arr) {
    let resultado = [];

    for (let contador = 0; contador < arr.length; contador++) {
        const item = arr[contador];//coloca-se o contador entre colchetes para informar que eu quero pegar o item do meu índice atual deste meu array.

        if (!resultado.includes(item)) {
            resultado.push(item);
        }
    }
    return resultado;
}
console.log(retornaUnicos([1, 1, 3, 55, 55, 34, 7, 7, 7, 4]));

// forma fácil
// porém estranha
console.log(new Set ([1, 1, 33, 33, 5, 66, 12, 12]))