import { Router } from 'express';
import { logout } from '../controllers/authentication/logout.del';
import { get_login } from '../controllers/authentication/login.get';
import { post_login } from '../controllers/authentication/login.post';

const session = Router();

session.route('/login').get(get_login).post(post_login).delete(logout);

export default session;
