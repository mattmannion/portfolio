const env = process.env;

// env check
export const prod: boolean = env.NODE_ENV === 'prod' ? true : false;

// ports and paths
export const path: string = prod ? env.PATH! : 'http://localhost:';
export const port: number = prod ? +env.PORT! : 7890;

export const redis_port: number = prod ? +env.REDIS_PORT! : 6379;
export const redis_host: string = prod ? env.REDIS_HOST! : 'localhost';

// session data
export const session_name: string = env.SESSION_NAME!;
export const session_age: number = +env.SESSION_AGE!;
export const session_secret: string = env.SESSION_SECRET!;

// cors
const prodlist = new Set([env.WL_1!]);
const devlist = new Set(['http://localhost:3000', 'http://localhost:7890']);
export const whitelist = prod ? prodlist : devlist;

export default env;
