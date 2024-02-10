import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('foo');
});

app.post('/api/product', (req, res) => {
  console.log(req.body);

  return res.send('Produto adicionado');
});

app.all('/api/product/check', (req, res) => {
  // req.method = VERBO HTTP
  if (req.method === 'POST') {
    return res.send('Produto adicionado');
  } else if (req.method === 'GET') {
    return res.send('Produto removido');
  } else {
    return res.status(404).send('Produto não encontrado');
  }
});

// Interface do express

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
