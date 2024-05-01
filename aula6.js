// Aula 6
// DESAFIOS
// FÁCEIS

// 1 //
function somaDosValores(number) {
    let somatoria = 0 /*nessa variável, colocamos o seu valor como 0 para informar que esse será o número que usaremos para somar junto ao nosso parâmetro*/
    for (let contador = 1; contador <= number; contador++) {
        somatoria = somatoria += contador;// aqui é onde acontece o nosso cálculo, onde a variável 'somatoria' que é 0, é somada/incrementada ao nosso contador(índice), também pode-se escrever "somatoria = somatoria =+ contador"

    } /*criamos esse FOR, para indicar que, enquanto o nosso índice(contador, que é igual à 1), for menor ou igual ao número informado, eu vou incrementar mais um ao índice*/
    return somatoria;
}
console.log(somaDosValores(33));


// 2 //
function parOuImpar(parametroNumerico) {
    if (parametroNumerico % 2 === 0) {
        console.log("Fica safe que esse número é PAR!");
    } else {
        console.log("Vishhh, esse número é ÍMPAR hein!");
    }
}
parOuImpar(110);


// MÉDIO

// 1 //
function palindromoOuNao(palavra) {
    const palavrasMinusculas = palavra.toLowerCase();
    const tamanhoPalavra = palavrasMinusculas.length;

    let palavraInvertida = "";

    //For "invertido"
    for (let i = tamanhoPalavra - 1; i >= 0; i--) {
        palavraInvertida = palavraInvertida.concat(palavrasMinusculas[i]);
    }

    return palavrasMinusculas == palavraInvertida;
}
console.log(palindromoOuNao("Ovo"));
console.log(palindromoOuNao("Uva"));

// 2 //
function primoOuNao(valor) {
    for (let verificador = 2; verificador <= valor; verificador++) {
        if (verificador === 1 || verificador === valor) {
            continue;
        }

        if (valor % verificador === 0) {
            return false;
        }
    }

    return true;// a função vai retornar true SEMPRE, a não ser que ela cai nesse segundo IF!
}
console.log(primoOuNao(7));
console.log(primoOuNao(521));


// DIFÍCIL
// "esse codigo é feio" - sor João.

function verificaCPF(cpf) {
    const digitos = cpf.split("");

    let soma1 = 0; // coloco essa variável fora do escopo do for, pois vou usar ela em outro momento também.

    for (let contador = 0; contador <= 8; contador++) {
        const numero = parseInt(digitos[contador]);//dígito atual
        const modificador = 10 - contador;

        soma1 += numero * modificador;
    }

    let digitoVerficador1;
    const calculo1 = 11 - (soma1 % 11);

    if (calculo1 >= 10) {
        digitoVerficador1 = 0;
    } else {
        digitoVerficador1 = calculo1;
    }

    let soma2 = 0;

    for (let contador = 0; contador <= 9; contador++) {
        const numero = parseInt(digitos[contador]);
        const modificador = 10 - contador;

        soma2 += numero * modificador;
    }

    let digitoVerficador2;
    const calculo2 = 11 - (soma2 % 11);

    if (calculo2 >= 10) {
        digitoVerficador2 = 0;
    } else {
        digitoVerficador2 = calculo2;
    }

    return cpf[9] == digitoVerficador1 && cpf[10] == digitoVerficador2;
}
console.log("cpf:", verificaCPF("04607913030"));