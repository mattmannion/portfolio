import { Request, Response } from 'express';
import { logger } from '../../util/util';

export async function GetLogin(req: Request, res: Response) {
  logger(req);

  try {
    const { session } = req;
    const logged_in =
      session && session.username
        ? 'you are logged in'
        : 'you are not logged in';

    res.status(200).json({
      status: logged_in,
    });
  } catch (error) {
    console.log(error);
  }
}
