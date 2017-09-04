import React, { Component } from 'react'
import {submitMessagesBackend, displayMessages} from 'C:/Users/Duwan_000/Documents/GitHub/react-router-firebase-auth/src/helpers/auth.js'
import Messages from './Messages'
import ChatInput from './ChatInput'

export default class ChatApp extends Component{
constructor(props){
  super(props)
  this.state = { messages: [] }
  this.sendHandler = this.sendHandler.bind(this)
  // console.log(this.props.matchkey)
  // console.log(this.props.user)
  const fbMessages = displayMessages(this.props.matchkey)
    console.log('fbMessages')
  console.log(fbMessages)
  //this.setState({ messages: fbMessages })
  this.addMessage(fbMessages)
}

sendHandler(message) {
  const messageObj = {
    username: this.props.user,
    message
  }

  console.log('this.props.matchKey')
  console.log(this.props.matchkey)

  submitMessagesBackend(messageObj, this.props.matchkey)
  //messageObj.fromMe = true
  this.addMessage(messageObj)
}

addMessage(message){
  const messages = this.state.messages
  console.log('messages')
  console.log(messages)
  messages.push(message)
  this.setState({ messages })
}

//
//
//


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
