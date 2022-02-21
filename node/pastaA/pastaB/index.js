const http = require('http')
http.createServer((req, res)=>{
    res.write('Brabo demais')
    res.end()
}).listen(8080)