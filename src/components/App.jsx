import { Route, Routes } from 'react-router-dom';

import UsersPage from 'pages/UsersPage';
import UserDetailsPage from 'pages/UserDetailsPage';
import HomePage from 'pages/HomePage';
// import Header from './Header';
import Layout from 'layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users-list" element={<UsersPage />} />
          <Route path="users-list/:id" element={<UserDetailsPage />} />{' '}
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
