import { Router, Request, Response } from 'express';
import { createMovie } from './controllers/movieControllers';

// Validation
import { validate } from './middleware/handleValidation';

const router = Router();

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'API successful' });
  })
  .post('/movie', validate, createMovie);
