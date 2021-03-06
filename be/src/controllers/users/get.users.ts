import { Request, Response } from 'express';
import { dbq } from '../../db/psql.db';
import { get_users_query } from '../../db/sql/users.sql';
import { logger } from '../../util/util';

interface GetUsersResponseIF {
  id: number;
  firstname: string;
  lastname?: string;
  email?: string;
  username?: string;
  password?: string;
}

export async function GetUsers(req: Request, res: Response) {
  logger(req);
  try {
    const users = (await dbq(get_users_query, [], 1)) as GetUsersResponseIF[];

    res.status(200).json({
      users,
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
}
