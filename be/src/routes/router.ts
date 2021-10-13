import authentication from './authentication';
import users from './users';

// app.use(...router) in index.ts
// spreads all routes into server MW
export default [authentication, users];
