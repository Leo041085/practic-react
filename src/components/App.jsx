import { UsersList } from './UserList/UsersList';
import { nanoid } from 'nanoid';
import data from '../users.json';
import Section from './Section/Section';
import Button from './Button/Button';
// import Form from './Form/Form';
import { Component } from 'react';
import FormikForm from './FormFormic/FormFormic';
import Filter from './FilterForm/Filter';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    users: null,
    isShowForm: false,
    userDetails: null,
  };

  componentDidUpdate( prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      localStorage.setItem('users', JSON.stringify(this.state.users))
    }
  };

  componentDidMount() {
    const stringifiedUsers = localStorage.getItem('users');
    // const parsedUsers = JSON.parse(stringifiedUsers)??data;
    // if (!parsedUsers.length) {
    //   this.setState({users: data})
    // } else {
    //   this.setState({ users: parsedUsers });
    // }

    stringifiedUsers && JSON.parse(stringifiedUsers).length > 0
      ? this.setState({ users: JSON.parse(stringifiedUsers) })
      : this.setState({ users: data });
  };
  
  openDetails=(user)=> {
    this.setState({userDetails: user})
  };

  closeModal = () => {
    this.setState({ userDetails: null })
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id),
      };
    });
  };
  handleChangeJob = id => {
    this.setState(preState => {
      return {
        users: preState.users.map(user => {
          return user.id === id ? { ...user, hasJob: !user.hasJob } : user;
        }),
      };
    });
  };
  openForm = () => {
    this.setState({
      isShowForm: true,
    });
  };
  closeForm = () => {
    this.setState({
      isShowForm: false,
    });
  };
  addUser = data => {
    const newData = {
      ...data,
      id: nanoid(),
      hasJob: false,
    };
    this.setState(prevState => {
      return {
        users: [...prevState.users, newData],
      };
    });
  };

  handleChangeFilter = e => {
    // e.target.value 
    this.setState({ 
      users: data.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))
    }) 
  }

  render() {
    return (
      <Section title="UsersList">
        <Filter handleChange={this.handleChangeFilter} />
        {this.state.users && (<UsersList
          users={this.state.users}
          handleDelete={this.handleDelete}
          handleChangeJob={this.handleChangeJob}
          openDetails={this.openDetails}
        />)} 
        {!this.state.isShowForm ? (
          <Button text="Open form" handleClick={this.openForm} />
        ) : (
          // <Form onFormSubmit={this.addUser} closeForm={this.closeForm} />
          <FormikForm onFormSubmit={this.addUser} closeForm={this.closeForm} />
        )}
        {this.state.userDetails && (<Modal user={this.state.userDetails} close={this.closeModal}/>)}
      </Section>
    );
  }
}
