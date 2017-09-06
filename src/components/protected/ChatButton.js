import React, { Component } from 'react'
import ChatApp from './ChatApp'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/react-router-firebase-auth/src/config/constants'

export default class ChatButton extends Component{

constructor(props) {
  super(props);
  this.state = { submitted: false };

  // Bind 'this' to event handlers. React ES6 does not do this by default
  //this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
  this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
}

// usernameChangeHandler(event) {
//   this.setState({ username: event.target.value });
// }

usernameSubmitHandler(event) {
  event.preventDefault();
  const user = firebaseAuth().currentUser.uid
//  this.setState({ submitted: true, username: this.state.username });
    this.setState({ submitted: true, username: user })
}

render() {

  console.log('ChatButton')
  console.log(this.props.matchkey)

  if (this.state.submitted) {
    // Form was submitted, now show the main App
    return (
      <ChatApp matchkey={this.props.matchkey} user={this.state.username}/>
    );
  }

const h1 = {
  display: 'block'
}

const usernameContainer = {
  maxWidth: '400px',
  margin: '0 auto',
  textAlign: 'center',
  marginTop: '10%'
}

  // Initial page load, show a simple login form
  return (
    <form onSubmit={this.usernameSubmitHandler} style={usernameContainer} className="username-container">
      <h1 style={h1}>React Instant Chat</h1>
      <input type="submit" value="Enter Match Messages" />
    </form>
  );
}

}
