import { requestUser } from 'Api/user';
import { getUserThunk } from 'Store/Users/usersThunks';
import { Text, Title } from 'components/User/UserStyled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function UserDetailsPage() {
  const user = useSelector(state=> state.users.userDetails);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    id && dispatch(getUserThunk(id))
  }, [dispatch, id]);

  const handleClick = () => {
    navigate(location.state);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
      {user && (
        <>
          <Title>Name: {user.firstName}</Title>
          <Text>Phone Number: {user.phone}</Text>
        </>
      )}
    </>
  );
}

export default UserDetailsPage;
