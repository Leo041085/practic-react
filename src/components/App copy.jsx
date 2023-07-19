import { UsersList } from './UserList/UsersList';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Button from './Button/Button';
// import Form from './Form/Form';
import { useEffect, useState } from 'react';
import FormikForm from './FormFormic/FormFormic';
//import Filter from './FilterForm/Filter';
import Modal from './Modal/Modal';
import { requestUsers } from 'Api/user';

const LIMIT = 10;
const SKIP = 10;

const App = () => {
  const [users, setUsers] = useState(null);
  const [isShowForm, setIsShowForm] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [isShowUsers, setIsShowUsers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (isShowUsers) {
      handleUsers(page);
    }

    if (!isShowUsers) {
      handleUsers(null);
    }
  }, [isShowUsers, page]);

  // componentDidUpdate(prevProps, prevState) {
  //     const { isShowUsers, page } = this.state;

  //     // if (isShowUsers !== prevState.isShowUsers && isShowUsers) {
  //     //   this.handleUsers(page)
  //     // }

  //     if (isShowUsers !== prevState.isShowUsers && !isShowUsers) {
  //       this.setState({users: null})
  //     };

  //     // if (page !== prevState.page) {
  //     //   this.handleUsers(page)
  //     // }

  //     if (isShowUsers && (prevState.isShowUsers !== isShowUsers || prevState.page !== page)) {
  //       this.handleUsers(page);
  //     };
  //   };

  const toggleUsers = () => {
    // this.setState((prevState) => { return { isShowUsers: !prevState.isShowUsers } })

    setIsShowUsers(prevState => {
      return !prevState;
    });
  };

  const handleUsers = async numberPage => {
    const skip = numberPage * SKIP - LIMIT;
    try {
      setIsLoading(true);
      const data = await requestUsers(skip, LIMIT);
      setUsers(prevState => {
        return prevState ? [...prevState, ...data] : data;
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const openDetails = user => {
    setUserDetails(user);
  };
  const closeModal = () => {
    setUserDetails(null);
  };
  const handleDelete = id => {
    setUsers(prevState => prevState.filter(user => user.id !== id));
  };

  const handleChangeJob = id => {
    setUsers(preState =>
      preState.map(user =>
        user.id === id ? { ...user, hasJob: !user.hasJob } : user
      )
    );
  };

  const openForm = () => {
    setIsShowForm(true);
  };
  const closeForm = () => {
    setIsShowForm(false);
  };
  const addUser = data => {
    const newData = {
      ...data,
      id: nanoid(),
      hasJob: false,
    };
    setUsers(prevState => [...prevState, newData]);
  };

  return (
    <Section title="UsersList">
      <Button
        text={isShowUsers ? 'Hide users' : 'Show users'}
        handleClick={toggleUsers}
      />
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {users && (
        <UsersList
          users={users}
          handleDelete={handleDelete}
          handleChangeJob={handleChangeJob}
          openDetails={openDetails}
        />
      )}
      {users && <Button text="Load more" handleClick={loadMore} />}
      {!isShowForm ? (
        <Button text="Open form" handleClick={openForm} />
      ) : (
        <FormikForm onFormSubmit={addUser} closeForm={closeForm} />
      )}
      {userDetails && <Modal user={userDetails} close={closeModal} />}
    </Section>
  );
};

// export class App extends Component {

//   static limit = 10;
//   static skip = 10;

//   state = {
//     users: null,
//     isShowForm: false,
//     userDetails: null,
//     isShowUsers: false,
//     isLoading: false,
//     error: '',
//     page: 1,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { isShowUsers, page } = this.state;

//     // if (isShowUsers !== prevState.isShowUsers && isShowUsers) {
//     //   this.handleUsers(page)
//     // }

//     if (isShowUsers !== prevState.isShowUsers && !isShowUsers) {
//       this.setState({users: null})
//     };

//     // if (page !== prevState.page) {
//     //   this.handleUsers(page)
//     // }

//     if (isShowUsers && (prevState.isShowUsers !== isShowUsers || prevState.page !== page)) {
//       this.handleUsers(page);
//     };
//   };

//   toggleUsers = () => {
//     this.setState((prevState) => { return { isShowUsers: !prevState.isShowUsers } })
//   };

//   handleUsers = async (numberPage) => {
//     const skip = numberPage * App.skip - App.limit;
//     try {
//       this.setState({ isLoading: true })
//       const data = await requestUsers(skip, App.limit);
//       this.setState((prevState) => { return { users: prevState.users ? [...prevState.users, ...data.users] : data.users } });
//       console.log(data);
//     } catch (error) {
//       this.setState({error: error.message})
//     } finally {
//       this.setState({ isLoading: false })
//     }
//   };

//   loadMore = () => {
//     this.setState((prevState) => { return { page: prevState.page + 1 } });
//   };

//   openDetails=(user)=> {
//     this.setState({userDetails: user})
//   };
//   closeModal = () => {
//     this.setState({ userDetails: null })
//   };
//   handleDelete = id => {
//     this.setState(prevState => {
//       return {
//         users: prevState.users.filter(user => user.id !== id),
//       };
//     });
//   };
//   handleChangeJob = id => {
//     this.setState(preState => {
//       return {
//         users: preState.users.map(user => {
//           return user.id === id ? { ...user, hasJob: !user.hasJob } : user;
//         }),
//       };
//     });
//   };
//   openForm = () => {
//     this.setState({
//       isShowForm: true,
//     });
//   };
//   closeForm = () => {
//     this.setState({
//       isShowForm: false,
//     });
//   };
//   addUser = data => {
//     const newData = {
//       ...data,
//       id: nanoid(),
//       hasJob: false,
//     };
//     this.setState(prevState => {
//       return {
//         users: [...prevState.users, newData],
//       };
//     });
//   };

//   render() {
//     const {error, isLoading, users, isShowUsers, isShowForm, userDetails } = this.state;
//     return (
//       <Section title="UsersList">
//         <Button text={isShowUsers ? "Hide users" : "Show users"} handleClick={this.toggleUsers} />
//         {error && <h2>{error}</h2>}
//         {isLoading && <h2>Loading...</h2>}
//         {users && (<UsersList
//           users={users}
//           handleDelete={this.handleDelete}
//           handleChangeJob={this.handleChangeJob}
//           openDetails={this.openDetails}
//         />)}
//         {users && <Button text="Load more" handleClick={this.loadMore}/>}
//         {!isShowForm ? (
//           <Button text="Open form" handleClick={this.openForm} />
//         ) : (
//           <FormikForm onFormSubmit={this.addUser} closeForm={this.closeForm} />
//         )}
//         {userDetails && (<Modal user={userDetails} close={this.closeModal}/>)}
//       </Section>
//     );
//   }
// }

export default App;
