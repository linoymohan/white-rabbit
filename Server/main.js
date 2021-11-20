const app = require('./server');
const http = require('http');

const port = 3000

http.createServer(app).listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })