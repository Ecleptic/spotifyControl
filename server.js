const http = require('http')
const fs = require('fs')

const PORT = 42069

http
  .createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  })
  .listen(PORT)
