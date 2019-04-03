import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
  };
}

componentDidMount() {
  Axios.get('http://localhost:5000/friends')
    .then(response => {this.setState({friends: response.data}) })
    .catch(error => (error));
}

changeHandler = event => {
  event.persist();
  let value = event.target.value;

  this.setState(prevState => ({
    friend: {
      ...prevState.friend,
      [event.target.name]: value
    }
  }));
}

newFriend = e => {
  e.preventDefault();
  Axios.post('http://localhost:5000/friends', {
    name: this.state.name,
    age: this.state.age,
    email: this.state.email
  })
    .then(response => {this.setState({friends: response.data})})
    .catch(error => console.log(error));
  this.setState({
    name: '',
    age: 0,
    email: ''
  })
}

render() {
  return (
    <div>
      {this.state.friends.map(friend => (
        <FriendsList
        key={friend.id}
        friend={friend}
        name={friend.name}
        age={friend.age}
        email={friend.email}
        />
      ))}
    </div>
  )
}
}

export default App;
