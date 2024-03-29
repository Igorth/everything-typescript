// ENV Variables
require('dotenv').config();

import express from 'express';
import config from 'config';

const app = express();

// JSON middleware
app.use(express.json());

// DB
import db from '../config/db';

// Routes
import router from './router';

// Logger
import Logger from '../config/logger';

// Middleware
import morganMiddleware from './middleware/morganMiddleware';

app.use(morganMiddleware);

app.use('/api', router);

// APP port
const port = config.get<number>('port');

app.listen(3000, async () => {
  await db();
  Logger.info(`Server running on port ${port}`);
});
