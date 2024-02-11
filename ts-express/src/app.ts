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
app.get('/api/interfaces', (req: Request, res: Response) => {
  return res.json({
    message: 'Hello World',
  });
});

app.get('/api/json', (req: Request, res: Response) => {
  return res.json({
    name: 'shirt',
    price: 33,
    color: 'blue',
    sizes: ['P', 'M', 'G'],
  });
});

app.get('/api/product/:id', (req: Request, res: Response) => {
  const id = req.params.id;

  if (id === '1') {
    const product = {
      id: 1,
      name: 'Butter',
      price: 10,
    };
    return res.json(product);
  } else {
    return res.send('Product');
  }
});

app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`O review ${reviewId} do ID do produto ${productId}`);
});

// Router Handler
function getUser(req: Request, res: Response) {
  console.log('Resgatando o usuário com o ID: ' + req.params.id);

  return res.send('Usuário encontrado');
}
app.get('/api/user/:id', getUser);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
