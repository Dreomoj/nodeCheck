// console.log("Hello World!");
// console.log(require('./sample/data.js'));
//types of modules
// customize modules
// core modules
// third party modules


//asynchronous call - lines of codes are not read at the same time
//synchronous call - js reads our codes line-by-line


const express = require('express')
const app = express()
const port = 7898

app.get('/', (request, response) => {
    response.status(200)
    response.send('welcome to  homepage');
})
app.listen(port, ()=> console.log(`server started successfully click: http://localhost:${port}`))