import { useEffect, useMemo, useRef, useState } from 'react';
import { requestUsers, searchUsers } from 'Api/user';
import { UsersList } from 'components/UserList/UsersList';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersThunk } from 'Store/Users/usersThunks';
import { setFilter } from 'Store/Users/usersSlice';
import { filterUsersSelector, usersSelector } from 'Store/Users/usersSelectors';

const LIMIT = 10;
const SKIP = 10;

function UsersPage() {
  const {
    items: users,
    isLoading,
    error,
    page,
    total,
  } = useSelector(usersSelector);
  const filter = useSelector(filterUsersSelector)

  const [isShowUsers, setIsShowUsers] = useState(false);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  // const [page] = useState(1);
   const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = useMemo(() => {
    return searchParams.get('search') ?? '';
  }, [searchParams]);

  useEffect(() => {
    !searchQuery && setSearchParams({});
  }, [searchQuery, setSearchParams]);

  useEffect(()=>{
    if(searchQuery){
      dispatch(setFilter(searchQuery))
    }else{
      dispatch(setFilter(''))
    }
  },[dispatch, searchQuery])

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

  //page, limit
  useEffect(() => {
    if (isShowUsers || page !== currentPage) {
      dispatch(getAllUsersThunk({ page: currentPage, limit: LIMIT }));
    }
  }, [dispatch, isShowUsers, page, currentPage]);

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
  function loadMore(){
    setCurrentPage(prev => prev +1)
  }

  return (
    <>
      <Button
        text={isShowUsers ? 'Hide users' : 'Show users'}
        handleClick={toggleUsers}
      />
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      <SearchForm        
        searchQuery={filter}
        setSearchParams={setSearchParams}
      />
      {users && (
        <>
          <UsersList
            users={users}
            //handleDelete={handleDelete}
            //handleChangeJob={handleChangeJob}
          />

          <Button text="Load more" handleClick={loadMore} />
        </>
      )}
    </>
  );
}

export default UsersPage;
