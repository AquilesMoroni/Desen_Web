const  { createServer } = require('http');
const express = require ('express');

const dotenv = require('dotenv');
const bodyParser = require('body-parser');

let app = express();

dotenv.config();  // procura o arquivo .env e le

app.use(bodyParser.json());

//app.use(express.json()); // funciona dos 2 jeitos

process.on('SIGINT', () => http.close((error) => {
    if(error){
        console.log(`${error.name}: ${error.message}`)
    }

    process.exit(error ? 1:0);
}))



const http = createServer(app);

app.get('/', (req, res) => res.send('<h1>Resposta</h1>'));

app.post('/', function (req, res){
    const name = req.body.name;
    res.send(`Olá ${name}`);
})

http.listen(8989, () => console.log('Listening to port 8989'));