import { requestUser } from 'Api/user';
import { Text, Title } from 'components/User/UserStyled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserDetailsPage() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const detailUser = async () => {
      const user = await requestUser(id);
      setUser(user);
    };
    detailUser();
  }, [id]);

  return (
    <>
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
