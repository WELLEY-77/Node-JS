import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Ola deu certo')
    res.send();
})

module.exports = router;