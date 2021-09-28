import { Request, Response } from 'express';
import { get_users_query } from '../../sql/users.queries';
import { dbq } from '../../util/db';
import { logger } from '../../util/util';

export async function get_users(req: Request, res: Response) {
  logger(req);

  try {
    const users = await dbq(get_users_query, [], 1);

    res.status(200).json({
      users,
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
}
