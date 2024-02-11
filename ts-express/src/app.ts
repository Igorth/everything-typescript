import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.use(express.json());

// Middleware em todas as rotas
// Todo middlware temos que ter a função NEXT sendo executada
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

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

// Middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === '1') {
    console.log('Pode seguir!');
    next();
  } else {
    console.log('Acesso Restrito');
    return res.status(403).send('Acesso Restrito');
  }
}
app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
  return res.json({
    msg: 'Área administrativa',
  });
});

app.get(
  '/api/user/:id/details/:name',
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(req.params.id);
    console.log(req.params.name);

    return res.json({ status: true });
  }
);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
