import React, { Component } from 'react'
import {submitMessagesBackend, displayMessages} from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import Messages from './Messages'
import ChatInput from './ChatInput'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'


export default class ChatApp extends Component{
constructor(props){
  super(props)
  this.state = { messages: [] }
  this.sendHandler = this.sendHandler.bind(this)
  this.loadMessages = this.loadMessages.bind(this)
  // console.log(this.props.matchkey)
  // console.log(this.props.user)
  //this.setState({ messages: fbMessages })
}

componentDidMount(){
//  const fbMessages = this.loadMessages(this.props.matchkey)
  // const fbMessages = displayMessages(this.props.matchkey)

  var fbMessages = []
  //child_added could be of use here
  ref.child(`messages/${this.props.matchkey}/`).on('value', (snapshot)=> {

  const currentMessages = snapshot.val()
   console.log(currentMessages)

  if (currentMessages != null){

  var keys = Object.keys(currentMessages)
  for(var i=0; i < keys.length; i++ ){

   var id = keys[i]
   var message = currentMessages[id].message
   var username = currentMessages[id].username

   var newMessage = {
     id: id,
     message: message,
     username: username
   }
   fbMessages.push(newMessage)
  this.setState({messages: fbMessages})
  }
  // console.log('fbMessages')
  // console.log(fbMessages)

}})}

// TODO: limit messages to 6 most recent, with ability to load more at top
// TODO: fix bug where first messages of new chat room don't render
componentDidUpdate(){
  console.log("Comp did update")

 const fbMessages = this.loadMessages(this.props.matchkey)

  console.log("len of fbMessages")
  console.log(fbMessages.length)
  console.log("Len of state messages")
  console.log(this.state.messages.length)

  if (fbMessages.length !== this.state.messages.length){
    console.log("Weird exception")
    this.setState({messages: fbMessages})
  }
}

loadMessages(matchkey){
  const fbMessages = displayMessages(matchkey)
  console.log('load messages')
  console.log(fbMessages)
  return(fbMessages)
}

// Add error handling logic here
sendHandler(message) {
  const messageObj = {
    username: this.props.user,
    message
  }

  console.log('this.props.matchKey')
  console.log(this.props.matchkey)

  submitMessagesBackend(messageObj, this.props.matchkey)
  //messageObj.fromMe = true
  this.addMessage(messageObj.message)
}

addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

render(){
  const h3 = {
    textAlign: 'center',
    padding: '20px 0',
    margin: '0',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#eee',
  }

  const container = {
    display: 'flex',
    flexDirection: 'column'
  }

  const messages = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    flexGrow: '1',
    padding: '20px'
  }

  const chatInput = {
    position: 'relative',
    overflow: 'hidden',
    padding: '0 40px',
    flexShrink: '0'
  }

  const chatInputText = {
    width: '100%',
    marginLeft: '-20px',
    marginRight: '-20px'
  }

  const messageFromMeUsername = {
    display: 'none',
  }

  const messageFromMe = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '5px'
  }

  const messageFromMeMessageBody = {
    backgroundColor: '#af9570',
    color: 'white',
  }

  const message = {
    marginBottom: '20px'
  }

  const messageBody = {
    maxWidth: '80%',
    display: 'inline-block',
    padding: '20px',
    backgroundColor: '#eee',
    border: '1px',
    borderRadius: '5px',
    paddingRight: '50px'
  }

  const username = {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '5px',
  }

  console.log('this.state.messages')
  console.log(this.state.messages)

return(
<div style={container} className="container">
  <h3 style={h3}> Messages of this match </h3>
  <Messages messages={this.state.messages} />
  <ChatInput onSend={this.sendHandler} />
</div>
)}
}
