// Trabalho 1 - Lucas Luis Valgoi

let books = [
    {
        id: 1,
        titulo: "Mais esperto do que o Diabo",
        autor: "Napoleon Hill",
        ano: 1938,
        emprestado: true
    },

    {
        id: 2,
        titulo: "Cartas de um diabo a seu Aprendiz",
        autor: "C.S Lewis",
        ano: 1942,
        emprestado: false
    },

    {
        id: 3,
        titulo: "Sagrada Família: entre fraldas e anjos",
        autor: "Alexandre Varela",
        ano: 2020,
        emprestado: false
    },

    {
        id: 4,
        titulo: "Preparação para a Morte",
        autor: "Santo Inácio de Loyola",
        ano: 2020,
        emprestado: true
    },

    {
        id: 5,
        titulo: "Meditações sobre a Morte",
        autor: "Tomás de Kempis",
        ano: 2024,
        emprestado: true
    }
]

// Funções
//1
function addOneBook(id, titulo, autor, ano, emprestado) {
    const newBook = books.find(find => find.id === id);

    if (!newBook) {
        books.push({
            id,
            titulo,
            autor,
            ano,
            emprestado,
        });
    } else {
        console.log("O ID deste livro já existe dentro de nosso estoque!! ");
    }
}
addOneBook(6, "Quem Pensa, Enriquece", "Napoleon Hill", 1937, true);
console.log(books);

//1.1
function addManyBooks(books) {
    for (const book of books) {
        addOneBook(book.id, book.titulo, book.autor, book.ano, book.emprestado);
    }
}

const lista = [{
    id: 7,
    titulo: "Calvário e a Missa",
    autor: "Venerável Fulton Sheen",
    ano: 2019,
    emprestado: false
}, 

{
    id: 8,
    titulo: "Do Mil ao Milhão",
    autor: "Thiago Nigro - O Primo Rico",
    ano: 2020,
    emprestado: true
}, 

{
    id: 9,
    titulo: "Pega a Visão",
    autor: "Rick Chesther",
    ano: 2018,
    emprestado: false
}
]
addManyBooks(lista);
console.log(books);


//2
function removeBook(id) {
    const findBook = books.find(i => i.id === id);
    const index = books.indexOf(findBook);
    
    const newBooks = [];//crio uma nova array para quando for usar o FOR, eu possa incrementar, com o Push, todos os meus livros, MENOS o que tem o id indicado.

    for (i = 0; i < books.length; i++) {
        if (i !== index) {
            newBooks.push(books[i])
        }
    }
    books = newBooks;
}
removeBook(1);
console.log(books);

//2.1
function removeManyBooks(ids) {
    for (const id of ids) {
        removeBook(id);
    };
};
removeManyBooks([2, 3]);// é necessário colocar o '[]' sempre que tiver mais do que um número, pois é uma array
console.log(books);


//3
function findTitle (titulo) {
    const findTitle = books.filter(i => (i.titulo.toLowerCase().indexOf(titulo.toLowerCase()) >= 0 ));

    // if (findTitle) {
    //     console.log("Este livro está em nosso estoque!");
    // } else {
    //     console.log("Este livro NÃO está em nosso estoque!");
    // }

    console.table(findTitle)
}
console.log(books);
findTitle("ã");


//4
function retornaLivros() {
   console.table(books); 
}
retornaLivros();


//5
//versão procurando pelo ID
function lendOneBook(id) {
    const findId = books.find(i => i.id === id);

    if (findId) {
        if (!findId.emprestado) {
            findId.emprestado = true;
            console.log("Este livro está Disponível para ser emprestado!");
        } else {
            console.log("Este livro está Indisponível para ser emprestado!");
        }
    } else {
        console.log("Livro não encontrado.");
    }
}
lendOneBook(9);
console.table(books);


//versão procurando pelo Título
// function lendOneBook(title) {
//     const book = books.find(i => i.titulo.toLowerCase() === title.toLowerCase());

//     if (book) {
//         if (!book.emprestado) {
//             console.log("Este livro está disponível para ser emprestado!");
//         } else {
//             console.log("Este livro está indisponível para ser emprestado!");
//         }
//     } else {
//         console.log("Livro não encontrado.");
//     }
// }
// lendOneBook('calvário e a missa');


//6
//versão procurando pelo ID
function returnOneBook(id) {
    const findId = books.find(i => i.id === id);

    if (findId) {
        if (findId.emprestado) {
            findId.emprestado = false;
            console.log("Este livro está sendo emprestado, ele precisa ser devolvido!");
        } else {
            console.log("Este livro não está sendo emprestado! Então não precisa ser devolvido!");
        }
    } else {
        console.log("Livro não encontrado.");
    }
}
returnOneBook(8);
console.table(books);

//versão procurando pelo Título
// function returnOneBook(title) {
//     const book = books.find(i => i.titulo.toLowerCase() === title.toLowerCase());

//     if (book) {
//         if (book.emprestado) {
//             console.log("Este livro está sendo emprestado, ele precisa ser devolvido!");
//         } else {
//             console.log("Este livro não está sendo emprestado! Então não precisa ser devolvido!");
//         }
//     } else {
//         console.log("Livro não encontrado.");
//     }
// }
// returnOneBook('do mil ao milhão');