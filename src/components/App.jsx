import { UsersList } from './UserList/UsersList';
import data from '../users.json';
import Section from './Section/Section';
import { Component } from 'react';

export class App extends Component{
  // console.log(data);
  state = {
    users: data,
  };

  handleDelete=(id) =>{
    // this.setState({
    //   users: this.state.users.filter((user) =>
    //     user.id!==id
    //   )
    // })
    this.setState((prevState) => {
      return {
      users: prevState.users.filter((user) => 
        user.id!==id 
      )}
    })
  }

  handleChangeJob = (id) => {
    this.setState((preState) => {
      return {
        users: preState.users.map((user) => {
          return(user.id === id ? {...user, hasJob: !user.hasJob} : user)
        })
      }
    })
  }

  render() {
    return (
    <Section title="UsersList">
      <UsersList users={this.state.users} handleDelete={this.handleDelete} handleChangeJob={this.handleChangeJob}/>
    </Section>
  );
  }
};

// Section ({title: "UserList"})
