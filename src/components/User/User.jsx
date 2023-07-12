import { Text, Title, StyledBtn } from './UserStyled';

const User = ({ user, handleDelete, handleChangeJob, openDetails }) => {
  return (
    <li>
      <Title>Name: {user.name}</Title>
      <Text hasJob={user.hasJob}>Job: {String(user.hasJob)}</Text>
      <StyledBtn onClick={() => handleDelete(user.id)}>Delete</StyledBtn>
      <StyledBtn onClick={() => handleChangeJob(user.id)}>
        Change Job Status
      </StyledBtn>
      <StyledBtn onClick={()=>openDetails(user)}>
        Details
      </StyledBtn>
    </li>
  );
};
export default User;
