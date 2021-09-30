import { createClient } from 'redis';
import connectRedis from 'connect-redis';
import session from 'express-session';
import {
  prod,
  redis_host,
  redis_port,
  session_secret,
  session_age,
  session_name,
  redis_password,
} from '../env';

const RedisStore = connectRedis(session);

console.log('prod: ', prod);

const redisClient = createClient({
  port: redis_port,
  host: redis_host,
  password: redis_password,
});

export default session({
  store: new RedisStore({ client: redisClient }),
  name: session_name,
  secret: session_secret,
  saveUninitialized: false,
  resave: false,
  cookie: {
    secure: prod,
    httpOnly: prod,
    maxAge: session_age,
    sameSite: 'lax',
  },
});
