// import axios from 'axios';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'universal-cookie';
import { api, cookie_name } from '../env';

const auth_path = api + '/login';

const cookies = new Cookies();

const config: AxiosRequestConfig = { withCredentials: true };

export async function login(username: string, password: string) {
  const { data } = await axios.post(auth_path, { username, password }, config);
  return data.username as string;
}

export async function logout() {
  cookies.remove(cookie_name);
  await axios.delete(auth_path, config);
}

export async function loginStatus() {
  const { data } = await axios.get(auth_path, config);
  return data.status as string;
}
