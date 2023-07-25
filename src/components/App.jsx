import { Route, Routes } from 'react-router-dom';

import UsersPage from 'pages/UsersPage';
import UserDetailsPage from 'pages/UserDetailsPage';
import HomePage from 'pages/HomePage';
// import Header from './Header';
import Layout from 'layout/Layout';
import { ToDoPage } from 'pages/ToDoPage';
import { CreateToDoPage } from 'pages/CreateToDoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users-list" element={<UsersPage />} />
          <Route path="users-list/:id" element={<UserDetailsPage />} />{' '}
          <Route path="toDo" element={<ToDoPage />} />
          <Route path="toDo/create" element={<CreateToDoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/users-list" element={<UsersPage />} />
//         <Route path="/users-list/:id" element={<UserDetailsPage />} />
//       </Routes>
//     </>
//   );
// }
