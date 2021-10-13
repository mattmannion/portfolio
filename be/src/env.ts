const env = process.env;

// env check
export const prod: boolean = env.NODE_ENV === 'prod' ? true : false;

// ports and paths
export const path: string = prod ? env.LOCATION! : 'http://localhost:';
export const port: number = prod ? +env.PORT! : 7890;

export const redis_port: number = prod ? +env.REDIS_PORT! : 6379;
export const redis_host: string = prod ? env.REDIS_HOST! : 'localhost';
export const redis_password = prod ? env.REDIS_PW! : undefined;

// session data
export const session_name: string = env.SESSION_NAME!;
export const session_age: number = +env.SESSION_AGE!;
export const session_secret: string = env.SESSION_SECRET!;

// cors
const prodlist = new Set([env.WL_1!, env.WL_2!]);
const devlist = new Set([
  'http://localhost:3000',
  'http://localhost:7890',
  undefined,
]);
export const whitelist = prod ? prodlist : devlist;
