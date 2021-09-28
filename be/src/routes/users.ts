import { Router } from 'express';
import auth_check from '../middleware/auth/check_auth';
import get_profile from '../controllers/users/get_profile';
import get_users from '../controllers/users/get_users';

const users = Router();

users.route('/users').get(get_users);

users.use(auth_check).route('/profile').get(get_profile);

export default users;
