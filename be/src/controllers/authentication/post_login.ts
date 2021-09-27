import { Request, Response } from 'express';
import { logger } from '../../util/util';

export default async function post_login(req: Request, res: Response) {
  logger(req);

  try {
    const { username, password } = req.body;
    req.session.username = username;

    res.status(200).json({
      username,
      password: password ? true : false,
      message: 'you have logged in',
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
}
