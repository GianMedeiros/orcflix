const { request } = require('express');
const express = require('express');

const listaTeste = [];

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('sucessaaaaçooo')
});

app.post('/login', (request, response) => {
  const { email, senha} = request.body;

  const itemTeste = {
    email,
    senha
  }

  listaTeste.push(itemTeste);

  return response.json(itemTeste);

});

app.get('/lista', (req, res) => {
  
  return res.json(listaTeste);
  // return res.json(listaTeste[0]["email"]);
  
});

app.listen(3000, () => console.log('tá funcionando'));