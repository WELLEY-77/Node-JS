import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('<h1> Express </h1>')
})

app.get('/json', (req, res) => {
    res.json({title:'Space X', done:true})
})

app.listen(3000, () => {
    console.log('Servidor ativo')
})