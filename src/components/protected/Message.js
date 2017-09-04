import React, { Component } from 'react'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/react-router-firebase-auth/src/config/constants'

export default class Messages extends Component{


render(){
  // Conditionaly add a style to messages sent by user
//  const fromMe = this.props.fromMe ? 'from-me' : ''
const user = firebaseAuth().currentUser.uid
const fromMe = this.props.username === user ? 'from-me' : ''

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

  const messageFromMe = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '5px'
  }

  const messageFromMeMessageBody = {
    maxWidth: '80%',
    display: 'inline-block',
    padding: '20px',
    border: '1px',
    borderRadius: '5px',
    paddingRight: '50px',
    backgroundColor: '#af9570',
    color: 'white',
  }

// Change for names
  const messageFromMeUsername = {
    display: 'none',
  }

const fromMeStyle = this.props.username === user ? messageFromMe : message
const fromMeBodyStyle = this.props.username === user ? messageFromMeMessageBody : messageBody
console.log('Entered Message Component')
console.log('this.props.message')
console.log(this.props.message)

  return(
    <div style={fromMeStyle} className={`message ${fromMe}`}>
      <div style={messageFromMeUsername} className='username'>
      { this.props.username }
    </div>
    <div style={fromMeBodyStyle} className='message-body'>
      { this.props.message }
    </div>
  </div>
  )
}
}
