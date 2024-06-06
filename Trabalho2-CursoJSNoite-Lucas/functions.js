import promptSync from "prompt-sync";

const prompt = promptSync();

//1
export function criarLivro(livros) {
    const titulo = prompt("Insira o Título do seu livro: ");
    const autor = prompt("Insira o Autor do seu livro: ");
    const ano = prompt("Insira o Ano do seu livro: ");


    const livro = {
        id: livros.ultimoId,
        titulo: titulo,
        autor: autor,
        ano: ano
    }

    livros.dados.push(livro);
    livros.ultimoId = livros.ultimoId + 1
}

//2
export function editarLivro(livros) {
    const id = parseInt(prompt("Insira o Id do livro: "));

    //procura o livro pelo id 
    const livro = livros.dados.find(l => l.id === id);

    if (livro) {
        //mudar TÍTULO do Livro
        livro.titulo = prompt("Insira o novo Título do livro: ", {
            value: livro.titulo
        });

        //mudar AUTOR do Livro
        livro.autor = prompt("Insira o novo Autor do livro: ", {
            value: livro.autor
        });

        //mudar ANO do Livro
        livro.ano = prompt("Insira o novo Ano do livro: ", {
            value: livro.ano
        });

    } else {
        console.log("Id do Livro não encontrado")
    }
}

//3
export function buscarNomeLivro(livros) {
    const livro = prompt("Insira o nome do Livro que você deseja procurar: ").toLowerCase();

    const livroNome = livros.dados.filter(ln => ln.titulo.toLowerCase().indexOf(livro) >= 0);//filter retorna todos os itens encontrados

    if(livroNome.length) {
        console.table(livroNome);
    } else {
        console.log("Livro não encontrado");
    }
}

//4 desconsiderada
// export function buscarCategoriaLivro(categorias) {
//     const categoria = prompt("Insira o nome do Livro que você deseja procurar: ").toLowerCase();

//     const livroCategoria = categorias.dados.filter(c => c.nome.toLowerCase().indexOf(categoria) >= 0);

//     if(livroCategoria.length) {
//         console.log(livroCategoria);
//     } else {
//         console.log("Categoria não encontrada");
//     }
// }

//4
export function excluirLivro (livros) {
    const id = parseInt(prompt("Insira o ID do Livro que você deseja excluir: "));

    const indexLivro = livros.dados.findIndex(il => il.id === id);//encontra o index do que eu quero encontrar, fazendo uma comparação para saber se o meu 'il.id' é ESTRITAMENTE igual ao 'id'

    if(indexLivro >= 0) {
        livros.dados.splice(indexLivro, 1);//quando for usar o 'splice', coloque como parêmetros O QUE quer excluir, e com a ',' QUANTOS itens quer excluir
    } else {
        console.log("Id do livro não encontrado");
    }
}


//5
export function criarCategorias(categorias) {
    const nome = prompt("Insira o nome da categoria: ");
    const categoria = {
        id: categorias.ultimoId,
        nome: nome
    }
    
    categorias.dados.push(categoria);
    categorias.ultimoId = categorias.ultimoId + 1;
}

//6
export function editarCategoria(categorias) {
    const id = parseInt(prompt("Insira o id da categoria: "));

    const categoria = categorias.dados.find(c => c.id === id);

    if (categoria) {
        categoria.nome = prompt("Insira o novo nome da categoria: ", {
            value: categoria.nome
        });
    } else {
        console.log("Categoria não encontrada")
    }
}

//7
export function visualizarCategoria(categorias) {
    const id = parseInt(prompt("Insira o ID da categoria que você deseja visualizar: "));

    const visualiza = categorias.dados.filter(v => v.id === id);

    if(visualiza) {
        console.table(visualiza);
    } else {
        console.log("Id da categoria não encontrado");
    }
}

//8
export function excluirCategoria(categorias) {
    const id = parseInt(prompt("Insira o ID da categoria que você deseja excluir: "));

    const indiceCategoria = categorias.dados.findIndex(ic => ic.id === id);

    //aqui faço uma condição para o código só executar se o meu 'indiceCategoria' for maior que 0, já que dento do indiceCategoria tem a função 'findIndex', onde nela pode conter números negativos, e como não é o que esperamos, temos que fazer essa condição
    if(indiceCategoria >= 0) {
        categorias.dados.splice(indiceCategoria, 1);
    } else {
        console.log("Id da categoria não encontrado");
    }
}