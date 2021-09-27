import cors from 'cors';
import { whitelist } from '../env';

const error: Error = <any>'Not Allowed By CORS';

export default cors({
  optionsSuccessStatus: 200,
  origin: (origin, callback) => {
    if (whitelist.has(origin!)) return callback(null, true);
    else return callback(error, false);
  },
});
