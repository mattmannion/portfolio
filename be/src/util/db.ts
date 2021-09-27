import { Pool } from 'pg';

const db = new Pool({ idleTimeoutMillis: 100 });

export const dbq = async (query: string, rows: number | null = null) => {
  // options are null, 0, false, 1, and true
  // set the default value in params
  if (rows === null)
    return await db.query(query).catch(err => console.log(err));
  if (!rows)
    return await db
      .query(query)
      .then(res => res.rows[0])
      .catch(err => console.log(err));
  if (rows)
    return await db
      .query(query)
      .then(res => res.rows)
      .catch(err => console.log(err));
};

export default db;
