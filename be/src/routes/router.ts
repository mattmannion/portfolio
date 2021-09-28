import authentication from './authentication';
import users from './users';

// app.use(...router) in main index.ts
// spreads all routes into server MW
export default [authentication, users];
