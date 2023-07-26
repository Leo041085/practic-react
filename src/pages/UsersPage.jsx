import { useEffect, useMemo, useRef, useState } from 'react';
import { requestUsers, searchUsers } from 'Api/user';
import { UsersList } from 'components/UserList/UsersList';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersThunk } from 'Store/Users/usersThunks';

const LIMIT = 10;
const SKIP = 10;

function UsersPage() {
  const { users, isLoading, error } = useSelector(state => state.users);
  const [isShowUsers, setIsShowUsers] = useState(false);
  const dispatch = useDispatch();
  // const [page] = useState(1);
  // const [searchParams, setSearchParams] = useSearchParams();

  // const ref = useRef(true);

  // const searchQuery = useMemo(() => {
  //   return searchParams.get('search') ?? '';
  // }, [searchParams]);

  // useEffect(() => {
  //   !searchQuery && setSearchParams({});
  // }, [searchQuery, setSearchParams]);

  // const getSearchResult = async query => {
  //   try {
  //     setIsLoading(true);
  //     const data = await searchUsers(query);
  //     setUsers(data.users);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   ref.current && searchQuery && getSearchResult(searchQuery);
  // }, [searchQuery]);

  useEffect(() => {    

    if (isShowUsers) {
      dispatch(getAllUsersThunk());
    }
    
  }, [dispatch, isShowUsers]);

  // const handleDelete = id => {
  //   setUsers(prevState => prevState.filter(user => user.id !== id));
  // };

  // const handleChangeJob = id => {
  //   setUsers(preState =>
  //     preState.map(user =>
  //       user.id === id ? { ...user, hasJob: !user.hasJob } : user
  //     )
  //   );
  // };

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
      {/* <SearchForm
        //refSearch={ref}
        // getSearchResult={getSearchResult}
        // searchQuery={searchQuery}
        // setSearchParams={setSearchParams}
      /> */}
      {users && (
        <UsersList
          users={users}
          //handleDelete={handleDelete}
          //handleChangeJob={handleChangeJob}
        />
      )}
    </>
  );
}

export default UsersPage;
