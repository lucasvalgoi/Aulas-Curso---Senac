// Aula 2
// ARRAYS

// Arrays é uma forma de armazenar infos/"dados" (de um mesmo valor, de preferência).
// No array, eu tenho funções em que eu posso executar, podendo
const a = [1, 2, 3, 4];

// a.push(36); // com o push, eu posso add uma nova info dentro da minha array
//console.log(a.length);

/*function quadrado(num) {
    return num * num;
}

const num1 = quadrado(a[0]);

const tamanho = a.length;*/

// uso da Condicional IF e FOR
// if (tamanho > 0) {
//     for (var contador = 0; contador < tamanho; contador = contador + 1) {
//         console.log(quadrado (a[contador]));
//     }
// }
// NaN = Not a Number, isso aparece no console pois o último console.log não tem valor armazenado na array


// WHILE = uso o while para indicar que ENQUANTO (condição - condizer com o que eu coloquei//verdadeira) tal função vai ser executada

/*let cont = 0; 

while(cont < a.length) {
    console.log(quadrado(a[cont]));
    cont = cont + 1;
}*/

//   erro Stack Over Flow
// function stackOverFlow(valorAtual, alvo) {
//     console.log(valorAtual);
//     if (valorAtual < alvo) {
//         return stackOverFlow(valorAtual + 1, alvo);
//     }
// }

// stackOverFlow(0, 10000000)


/*for (let i = 0; i < a.length; i++) {
    if (i <= 2) {
        console.log(a[i]);
    } else {
        console.log("ok");
    }
}*/

// Operação de resto
//console.log(50 % 5) // = quando o número é múltiplo, o result é 0

// for geralmente é usado quando tratamos de strings
// DESAFIO: Fizz Buzz
/*for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        console.log('buzz');
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz"); // aqui nunca vai aparecer, pois para esse funcionar, tem que passar por um dos ifs antes, logo, esse seria IGNORADO
    }else {
        console.log(i)
    }
}*/

// SWITCH CASE = uso o switch quando eu tenho várias opções mas eu quero usar apenas uma opção

const hoje = new Date(2008, 7, 22);

const diaDaSemana = hoje.getDay();

switch (diaDaSemana) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda-Feira")
        break;
    case 2:
        console.log("Terça-Feira")
        break;
    case 3:
        console.log("Quarta-Feira")
        break;
    case 4:
        console.log("Quinta-Feira")
        break;
    case 5:
        console.log("Sexta-Feira")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:
        console.log("Dia desconhedio")
        break;
}