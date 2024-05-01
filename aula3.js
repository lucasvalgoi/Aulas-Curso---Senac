// Aula 3
// OBJETOS - com PDF do sor João

// desafio FÁCIL
// 1 //
function soma(soma1, soma2) {
    return soma1 + soma2;
}
console.log(soma(5, 3));


//desafio FÁCIL
// 2 //
function sub(sub0, sub1) {
    return sub0 - sub1;
}

console.log(sub(6, 2));


// desafio FÁCIL
// 3 //
function mult(mult1, mult2) {
    return mult1 * mult2;
}
console.log(mult(2, 4));


// desafio FÁCIL
// 4 //
function div(div1, div2) {
    return div1 / div2
}
console.log(div(10, 5));


// desafio FÁCIL
// 5 //
function quadrado(quadrado1) {
    return quadrado1 * quadrado1;
}
console.log(quadrado(2))


// desafio MÉDIO
// 1 //

let array = [1, 3, 5]

function somarArray(arr) {
    const contador = arr.length;
    let somaDosArrays = 0
    for (let i = 0; i < contador; i++) {
        somaDosArrays += arr[i];
    }
    return somaDosArrays;
}
console.log(somarArray(array));


// desafio MÉDIO
// 2 //
// let vai ser sempre pra inicialização, então não podemos usar duas vezes um mesmo let, mas já o var sim

//forma longa que o sor fez

function buscarLetra(palavra, termo) {
    for (let i = 0; i < palavra.length; i++) {
        let termoAtual = "";

        if (termoAtual == letra) {
            return i;
        }
    }
}
 
// forma fácil que o sor fez
console.log("batataarrozpeixe".indexOf("arroz"));//ele me retorna apenas a posição da primeira letra