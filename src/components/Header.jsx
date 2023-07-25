import { NavLink } from 'react-router-dom';
import { NavStyled } from './HeaderSyled';

function Header() {
  return (
    <header>
      <NavStyled>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/users-list">Users</NavLink>
        <NavLink to="/toDo">ToDo</NavLink>
        <NavLink to="/toDo/create">toDoCreate</NavLink>
      </NavStyled>
    </header>
  );
}

export default Header;
