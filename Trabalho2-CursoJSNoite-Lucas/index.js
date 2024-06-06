import promptSync from "prompt-sync";
import fs from 'fs';

import { initDatabase, escreverArquivo } from "./utils.js";
import { criarLivro, criarCategorias, editarCategoria, editarLivro, buscarNomeLivro, excluirLivro, visualizarCategoria, excluirCategoria } from "./functions.js";


const prompt = promptSync();


const pathCategorias = './data/categorias.json';
const pathLivros = './data/livros.json';

initDatabase(pathCategorias);
initDatabase(pathLivros);

const categorias = JSON.parse(fs.readFileSync(pathCategorias, 'utf-8'));
const livros = JSON.parse(fs.readFileSync(pathLivros, 'utf-8'))



let executar = true
while (executar) {
    console.log(`Escolha uma opção:

    1. Criar Livro
    2 - Editar Livro
    3 - Buscar Livro por Nome
    4 - Excluir Livro
    5 - Criar Categoria
    6 - Editar Categoria
    7 - Visualizar Categorias
    8 - Excluir Categoria`);
    const opcao = prompt("Opção escolhida: ");

    switch (opcao) {
        case '1':
            criarLivro(livros);

            break;

        case '2':
            editarLivro(livros);
            break;

        case '3':
            buscarNomeLivro(livros);
            break;

        case '4':
            excluirLivro(livros);
            break;

        case '5':
            criarCategorias(categorias);
            break;

        case '6':
            editarCategoria(categorias);
            break;

        case '7':
            visualizarCategoria(categorias);
            break;

        case '8':
            excluirCategoria(categorias);
            break;

        default:
            executar = false;
            console.log("Funcionalidade não encontrada!");
            break;
    }

    escreverArquivo(pathCategorias, categorias);
    escreverArquivo(pathLivros, livros);
}

