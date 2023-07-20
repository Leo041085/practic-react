import { useEffect, useMemo, useRef, useState } from 'react';
import { requestUsers, searchUsers } from 'Api/user';
import { UsersList } from 'components/UserList/UsersList';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import Button from 'components/Button/Button';

const LIMIT = 10;
const SKIP = 10;

function UsersPage() {
  const [users, setUsers] = useState(null);
  const [isShowUsers, setIsShowUsers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const ref = useRef(true);

  const searchQuery = useMemo(() => {
    return searchParams.get('search') ?? '';
  }, [searchParams]);

  useEffect(() => {
    !searchQuery && setSearchParams({});
  }, [searchQuery, setSearchParams]);

  const getSearchResult = async query => {
    try {
      setIsLoading(true);
      const data = await searchUsers(query);
      setUsers(data.users);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    ref.current && searchQuery && getSearchResult(searchQuery);
  }, [searchQuery]);

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
    // console.log(isShowUsers);

    if (isShowUsers) {
      handleUsers(page);
    }
    if (!isShowUsers) {
      setUsers(null);
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

  const toggleUsers = () => {
    // this.setState((prevState) => { return { isShowUsers: !prevState.isShowUsers } })

    setIsShowUsers(prevState => {
      return !prevState;
    });
  };

  return (
    <>
      <Button
        text={isShowUsers ? 'Hide users' : 'Show users'}
        handleClick={toggleUsers}
      />
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      <SearchForm
        refSearch={ref}
        getSearchResult={getSearchResult}
        searchQuery={searchQuery}
        setSearchParams={setSearchParams}
      />
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
