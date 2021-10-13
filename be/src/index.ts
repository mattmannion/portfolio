require('dotenv').config();
import 'reflect-metadata';
import express, { json } from 'express';
import { path, port } from './env';
import cors from './middleware/cors';
import session from './middleware/redis-session';
import router from './routes/router';
import TypeOrmInit from './db/typeorm.db';

// this app will only be used for main server
// configuration, including initial middleware.
const app = express();

// if behind a proxy like nginx
// app.set('trust proxy', true);

// redis session
app.use(session);

// server config
app.disable('x-powered-by');
app.options('*', cors);
app.use(cors);

app.use(json());

// server router
app.use(...router);

// main iife
(async function () {
  // Typeorm
  await TypeOrmInit();

  // server start
  // app.listen(port, () => console.log(`live @ ${path}${port}`));
  app.listen(port, () => console.log('live @ ' + path + port));
})();
