import { Router } from 'express';
import del_login from '../controllers/authentication/del_login';
import get_login from '../controllers/authentication/get_login';
import post_login from '../controllers/authentication/post_login';

const session = Router();

session.route('/login').get(get_login).post(post_login).delete(del_login);

export default session;
