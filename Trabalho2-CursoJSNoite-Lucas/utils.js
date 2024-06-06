//Arquivo para Funções utilitárias
import fs from 'fs';

export function initDatabase(caminho) {
    const arquivoExiste = fs.existsSync(caminho);

    if (!arquivoExiste) {
        const conteudo = JSON.stringify({
            ultimoId: 1,
            dados: []
        });

        fs.writeFileSync(caminho, conteudo);
    }
}

export function lerArquivo(caminho) {
    const conteudo = fs.readFileSync(caminho, 'utf-8');

    return JSON.parse(conteudo);//parse vai extrair informações úteis de uma string JSON.
}

export function escreverArquivo(caminho, conteudo) {
    const texto = JSON.stringify(conteudo);

    fs.writeFileSync(caminho, texto)
}

