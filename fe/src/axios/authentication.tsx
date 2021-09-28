import axios from 'axios';
import { api } from '../env';

const auth_path = api + '/login';

export const axios_defaults = () => (axios.defaults.withCredentials = true);

export async function login(username: string, password: string) {
  return await axios.post(auth_path, { username, password });
}

export async function logout() {
  return await axios.delete(auth_path);
}
