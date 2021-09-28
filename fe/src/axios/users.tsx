import axios from 'axios';
import { api } from '../env';

const users_path = api + '/users';

export async function getAllUsers() {
  return await axios.get(users_path);
}
