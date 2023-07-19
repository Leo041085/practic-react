import { useEffect, useState } from 'react';
import { requestUsers } from 'Api/user';
import { UsersList } from 'components/UserList/UsersList';

const LIMIT = 10;
const SKIP = 10;

function UsersPage() {
  const [users, setUsers] = useState(null);
  const [isShowUsers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page] = useState(1);

  useEffect(() => {
    const handleUsers = async numberPage => {
      const skip = numberPage * SKIP - LIMIT;
      try {
        setIsLoading(true);
        const data = await requestUsers(skip, LIMIT);
        setUsers(prevState => {
          return prevState ? [...prevState, ...data] : data;
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (isShowUsers) {
      handleUsers(page);
    }
    if (!isShowUsers) {
      handleUsers(null);
    }
  }, [page, isShowUsers]);

  const handleDelete = id => {
    setUsers(prevState => prevState.filter(user => user.id !== id));
  };

  const handleChangeJob = id => {
    setUsers(preState =>
      preState.map(user =>
        user.id === id ? { ...user, hasJob: !user.hasJob } : user
      )
    );
  };

  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {users && (
        <UsersList
          users={users}
          handleDelete={handleDelete}
          handleChangeJob={handleChangeJob}
        />
      )}
    </>
  );
}

export default UsersPage;
