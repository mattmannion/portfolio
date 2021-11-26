import axios from 'axios';
import { api } from '../../env';
import { getAllUsersIF } from '../../types/requests/users';

const users_path = api + '/users';

export async function getAllUsers() {
  return (await axios.get(users_path)) as getAllUsersIF;
}
