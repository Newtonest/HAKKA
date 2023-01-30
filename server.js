const express = require('express');
const path = require('path');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.get('/', (req,res) => {
   res.sendFile(__dirname + '/web/index.html')
})

app.get('/index.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/web/index.css'))
})

app.get('/index.js',(req, res) => {
    res.sendFile(path.join(__dirname + '/web/index.js'));
})

app.get('/tu-pedido',(req, res) => {
    res.sendFile(path.join(__dirname + '/tu-pedido/index.html'));
})

app.get('/style.css',(req,res)=> {
    res.sendFile(path.join(__dirname + '/tu-pedido/style.css'));
})

app.listen(port,()=> {
    console.log(`listening on ${port}`);
});

