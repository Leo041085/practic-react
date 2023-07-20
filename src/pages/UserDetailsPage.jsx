import { requestUser } from 'Api/user';
import { Text, Title } from 'components/User/UserStyled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function UserDetailsPage() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const detailUser = async () => {
      const user = await requestUser(id);
      setUser(user);
    };
    detailUser();
  }, [id]);

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
