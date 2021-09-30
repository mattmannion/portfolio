require('dotenv').config();
import express, { json } from 'express';
import { path, port } from './env';
import cors from './middleware/cors';
import session from './middleware/redis-session';
import router from './routes/router';

// this app will only be used for main server
// configuration, including initial middleware.
const app = express();

try {
  // if behind a proxy like nginx
  app.set('trust proxy', 1);

  // redis session
  app.use(session);

  // server config
  app.options('*', cors);
  app.use(cors);
  app.use(json());
  app.disable('x-powered-by');

  // server router
  app.use(...router);

  // server start
  app.listen(port, () => console.log(`live @ ${path}${port}`));

  // end of try
} catch (error) {
  console.log(error);
}
