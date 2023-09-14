import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, ':', 'Repositorio não encontrado'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {

    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    
        console.log(chalk.green(texto))
    } catch(erro) {
        trataErro(erro)
    }

}


// Promises
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';

//     fs.promises.readFile(caminhoDoArquivo, encoding)
//       .then((texto) => console.log(chalk.green(texto)))
//       .catch(trataErro);
// }


pegaArquivo('./arquivos/texto.md');