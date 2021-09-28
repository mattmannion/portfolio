import { useState, useEffect } from 'react';
// import { useEffect } from 'react';
import { getAllUsers } from '../../axios/users';

interface usersIF {
  id: number;
  username: string;
}

export default function Home() {
  const [users, setUsers] = useState<usersIF[]>();

  useEffect(() => {
    (async () => {
      const { data } = await getAllUsers();
      setUsers(data.users);
    })();
  }, []);

  return (
    <>
      <div className='home'>Home</div>
      {users ? (
        users.map((m, i) => (
          <div key={i}>
            <div>
              {m.id}: {m.username}
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
