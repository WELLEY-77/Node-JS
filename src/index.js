import chalk from 'chalk';
import fs from 'fs';

function extrairlinks(texto) {

    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(resultado => ({[resultado[1]]:resultado[2]}))
    return resultados.length != 0 ? resultados : 'Não ha links';
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, ':', 'Repositorio não encontrado'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {

    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return(extrairlinks(texto))
    } catch(erro) {
        trataErro(erro)
    }

}

export default pegaArquivo;
