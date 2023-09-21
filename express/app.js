import express from 'express'

const app = express();

app.get('', (req, res) => {
    res.send('<h1> Express </h1>')
})

app.listen(3000, () => {
    console.log('Servidor ativo')
})