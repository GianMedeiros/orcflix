const { request } = require('express');
const express = require('express');

const moviesURL = "https://api.themoviedb.org/3"  // TODO: Talvez mover para um .env
const apiKey = "api_key=da2ade07e560ddc5e0e4b562abc3ce45"

const listaTeste = [];

const app = express();

app.use(express.json());

app.get('/teste/:token', (req, res) => {

  const { token } = req.params;

  const validacaoApi = `${moviesURL}/authenticate/${token}"`
  res.send(validação)
});

app.get('movie/:id', (req, res) => { 
  const { id } = req.params;
});

app.post('/login', (req, res) => {
  const { email, senha} = req.body;

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