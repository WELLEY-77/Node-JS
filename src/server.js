import http from 'http'

const serve = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    res.statusCode = 200;
    res.end('<h1>ola node</h1>')
})

serve.listen('3000', () => {
    console.log('Servidor ativo')
})
