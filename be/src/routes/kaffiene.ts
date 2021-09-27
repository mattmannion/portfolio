import { Router, Response } from 'express';

const kaffiene = Router();

kaffiene.route('/').get((req: any, res: Response) =>
  res.status(200).json({
    status: 'app awoken',
  })
);

export default kaffiene;

// this route exist purely for heroku Kaffiene to hit it.
// it has no other use. you can delete it to repurpose
// the root ('/') dir if you want to
