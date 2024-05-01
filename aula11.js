//Aula 11

// let condicao = true;
// let valor = 0;
// while (condicao) {
//     if (valor > 3) {
//         condicao = false;
//         break;//usa-se o break, pois sem ele, o código vai executar até chegar em 4, e aí depois vai executar a linha de código seguinte, fazendo a soma de valor(4) + 2, resultando em 6
//     }
//     valor = valor + 2;
// }
// console.log(valor);


//Exercícios
//1
//usando FOR
const myArr = [10, 33, 69, 27, 121, 70];
let maiorValor = null;//precisamos declarar essa variável como 'null' para que possamos usá-la dentro do if, para redeclarar ela como o valor atual(que será o maior)
// for (let i = 0; i < myArr.length; i++) {
//     const arrAtual = myArr[i];

//     if (maiorValor == null || arrAtual > maiorValor) {
//         maiorValor = arrAtual;
//     }
// }
// console.log(maiorValor);


//usando WHILE
let contador = 0
while (contador < myArr.length) {
    const arrAtual = myArr[contador];

    if (maiorValor == null || arrAtual > maiorValor) {
        maiorValor = arrAtual;
    }

    contador++;
}
console.log(maiorValor);


//2
//usando FOR
for (let i = 10; i >= 0; i--) {
    console.log(i);

};

//usando WHILE
let contador2 = 10;

while (contador2 >= 0) {
    console.log(contador2);

    contador2--

}


//3
//usando FOR
let soma = 0;
for (let i = 0; i <= 100; i = i += 2) {
    soma += i;
}
console.log(soma);

//usando WHILE
let soma2 = 0;
let contador3 = 0;

while (contador3 <= 100) {
    soma2 += contador3;
    contador3 += 2;
    //perceba que se 
}
console.log(soma2);


//4
//usando FOR
const meuArr = [21, 22, 16, 7, 10];
let soma3 = 0;

for (let i = 0; i < meuArr.length; i++) {
    soma3 += meuArr[i];
    
}
console.log(soma3);

//usando WHILE
let soma4 = 0;
let contadorzin = 0;

while (contadorzin < meuArr.length) {
    soma4 += meuArr[contadorzin];

    contadorzin++;
}
console.log(soma4);


//5
//usando FOR
let impares = [];

for (let i = 1; i <= 100; i += 2) {
    impares.push(i); // ou também
    impares[impares.length] = i;
}
console.log(impares);

//usando WHILE

// length sempre possuirá o valor do próximo índice a ser atribuído
let impares2 = [];
let contador4 = 1;

while (contador4 <= 100) {
    impares2[impares2.length] = contador4;

    contador4 += 2;
}
console.log(impares2);


//6
const palavra = "lorem ipsum dolor sit amet";

// for (let i = 0; i > palavra.length; i--) {
//     console.log(i);
    
// };
