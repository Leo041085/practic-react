import Section from 'components/Section/Section';
import User from '../User/User';

export const UsersList = ({ users, handleDelete, handleChangeJob, openDetails}) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <Section key={user.id}>
            <User user={user} handleDelete={handleDelete} handleChangeJob={handleChangeJob} openDetails={openDetails} />
          </Section>
        );
      })}
    </ul>
  );
};
