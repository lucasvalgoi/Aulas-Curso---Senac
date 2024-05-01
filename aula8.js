// Aula 8
// OBJECTS
// FORMAS DE DECLARAR:

// const a = new Object();

// const b = {};

//DESAFIOS:
// FÁCEIS
// 1 //
const vrumVrum = {
    marca: "Universal",
    modelo: "Fuxquinha",
    ano: "1210",
    cor: "alaranjado",
    status: false,
};


// 2 //
vrumVrum.retornaMarca = function () {
    return "A marca do seu carro é: " + this.modelo;
}
console.log(vrumVrum.retornaMarca());
/* há mais outra forma de fazer essa função, colocando ela dentro do meu Objeto "vrumVrum", por exemplo: const vrumVrum = {
    marca: "Universal",
    modelo: "Fuxquinha",
    ano: "1210",
    cor: "alaranjado",
    status: true,
    retornaMarca: function() {
    return "A marca do seu carro é: " + this.modelo;}
};*/


// 3 //
// PRIMEIRA FORMA DE FAZER:
vrumVrum.OnOrOff = function () {
    if (this.status === true) {
        console.log("Seu carro está ligado à toa parceiro, desliga ele!");
    } else {
        console.log("Seu carro está desligado, fica tranquilo parceiro!");
    }
}
vrumVrum.OnOrOff();

// SEGUNDA FORMA:
// function ligarVeiculo() {
//     this.status = true
// }

// function desligaVeiculo() {
//     this.status = false
// }

// TERCEIRA FORMA:
// function ligaOuDesligaVeiculo(ligado) {
//     this.status = ligado;
// }
// vrumVrum.ligaOuDesligaVeiculo = ligaOuDesligaVeiculo;
// vrumVrum.ligaOuDesligaVeiculo(false);
// console.log(vrumVrum);


// MÉDIOS
// 1 //
const books = [
    {
        titulo: "A volta dos que não foram",
        autor: "Xing Ling",
        ano: 2023,
        descrever: descreverLivro
    },

    {
        titulo: "A ida dos que foram",
        autor: "Xing Ling",
        ano: 2077,
        descrever: descreverLivro
    },

    {
        titulo: "Voltando pra não Ir",
        autor: "Deide Costa",
        ano: 2099,
        descrever: descreverLivro
    }

]


// 2 //
// aqui não usaremos o '.this' pois estou fazendo uma COMPARAÇÃO de dois livros
function comparacaoLivros(lirvo1, livro2) {
    const mesmoAutor = lirvo1.autor == livro2.autor;
    if (mesmoAutor == true) {
        console.log("Esses dois livros são do MESMO autor (:");
    } else {
        console.log("Esses dois livros NÃO são do mesmo autor paezão ):");
    }
}
comparacaoLivros(books[0], books[2]);


// 3 //
function descreverLivro() {
    console.log("O livro " + this.titulo + " foi escrito por " + this.autor + " no ano de " + this.ano);
}

books[0].descrever();
books[1].descrever();
books[2].descrever();

// DIFÍCEIS
// 1 //
const turma = {
    nome: "Programa",
    turno: "Noite",
    alunos: [],
};

turma.alunos.push({
    nome: "Jota",
    idade: 17,
});
turma.alunos.push({
    nome: "Takamia Bara",
    idade: 35,
});
turma.alunos.push({
    nome: "Jonson",
    idade: 72,
});

function retornaNomesAlunos(turma) {
    return turma.alunos.map((aluno) => {
        return aluno.nome;
    }).join(', ') // serve para juntar todos os valores do array em uma STRING
}
// a função 'map', é utilizada para percorrer cada item do array


// 3 //
function buscaIdade(aluno) {
    return aluno.idade;
}

function retornaMediaIdades(turma) {
    const contagemAlunos = turma.alunos.length;
    let soma = 0;
    
    for (let i = 0; i < contagemAlunos; i++) {
        soma = soma + turma.alunos[i].idade;
    }
    return soma / contagemAlunos;
}

console.log(turma);
console.log(retornaNomesAlunos(turma));
console.log(retornaMediaIdades(turma));