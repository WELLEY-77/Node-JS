import express from 'express'
import checkListRouter from '../src/routers/checklist'

const app = express();
app.use(express.json());

app.use("/checklist", checkListRouter)

app.listen(3000, () => {
    console.log('Servidor ativo')
})