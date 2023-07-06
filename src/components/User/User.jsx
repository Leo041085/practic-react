import { Text, Title } from './UserStyled';

const User = ({ user }) => {
  return (
    <li>
      <Title>Name: {user.name}</Title>
      <Text hasJob={user.hasJob}>Job: {String(user.hasJob)}</Text>
    </li>
  );
};
export default User;

console.log(123);
