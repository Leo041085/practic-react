import { useLocation } from 'react-router-dom';
import { Text, Title, StyledBtn, StyledLink } from './UserStyled';

const User = ({ user, handleDelete, openDetails }) => {
  const location = useLocation();
  return (
    <li>
      <Title>Name: {user.firstName}</Title>
      <Text>Phone Number: {user.phone}</Text>
      <StyledBtn onClick={() => handleDelete(user.id)}>Delete</StyledBtn>
      {/* <StyledBtn onClick={()=>openDetails(user)}>Details </StyledBtn>*/}
      <StyledLink to={`${user._id}`} state={location}>
        Details
      </StyledLink>
    </li>
  );
};
export default User;
