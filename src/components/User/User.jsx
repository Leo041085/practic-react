import { Text, Title, StyledBtn } from './UserStyled';

const User = ({ user, handleDelete, openDetails }) => {
  return (
    <li>
      <Title>Name: {user.firstName}</Title>
      <Text>Phone Number: {user.phone}</Text>
      <StyledBtn onClick={() => handleDelete(user.id)}>Delete</StyledBtn>
      <StyledBtn onClick={()=>openDetails(user)}>
        Details
      </StyledBtn>
    </li>
  );
};
export default User;
