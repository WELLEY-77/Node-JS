import fs from 'fs'

fs.writeFile('teste.txt', 'ola teste\n', (err) => console.log(err))

fs.rename('teste.txt', 'testeRename.txt', (err) => console.log(err))

fs.appendFile('testeRename.txt', 'rename', (err) => console.log(err))