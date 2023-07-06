import { UsersList } from './UserList/UsersList';
import data from '../users.json';
import Section from './Section/Section';

export const App = () => {
  // console.log(data);
  return (
    <Section title="UsersList">
      <UsersList users={data} />
    </Section>
  );
};

// Section ({title: "UserList"})
