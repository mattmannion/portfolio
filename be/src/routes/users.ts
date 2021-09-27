import { Router } from 'express';
import auth_check from '../middleware/auth/check_auth';
import get_profile from '../controllers/users/get_profile';

const users = Router();

users.use(auth_check).route('/profile').get(get_profile);

export default users;
