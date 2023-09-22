import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Ola deu certo')
    res.send();
})

router.post('/', (req, res) => {
    console.log(req.body)
    console.log(res.status(200).send())
})

module.exports = router;