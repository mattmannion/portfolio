import { Router } from 'express';
import { Logout } from '../controllers/authentication/del.login';
import { GetLogin } from '../controllers/authentication/get.login';
import { PostLogin } from '../controllers/authentication/post.login';

const session = Router();

session.route('/login').get(GetLogin).post(PostLogin).delete(Logout);

export default session;
