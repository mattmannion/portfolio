import { Router } from 'express';
import auth_check from '../middleware/auth/check_auth';
import { get_profile } from '../controllers/users/profile.get';
import { get_users } from '../controllers/users/users.get';

const users = Router();

users.route('/users').get(get_users);

users.use(auth_check).route('/profile').get(get_profile);

export default users;
