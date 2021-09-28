import { Request, Response } from 'express';
import { login_query } from '../../sql/authentication.queries';
import { dbq } from '../../util/db';
import { logger } from '../../util/util';

export async function post_login(req: Request, res: Response) {
  logger(req);

  try {
    const { username, password }: { username: string; password: string } =
      req.body;

    const data = await dbq(login_query, [username, password], 0);

    if (data) {
      req.session.username = data.username;

      res.status(200).json({
        username,
        password: password ? true : false,
        message: 'you have logged in',
        status: 'success',
      });
    } else
      res.status(204).json({
        message: 'incorrect username or password',
        status: 'success',
      });
  } catch (error) {
    console.log(error);
  }
}
