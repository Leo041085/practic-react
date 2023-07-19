import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/users-list">Users</NavLink>
      </nav>
    </header>
  );
}

export default Header;
