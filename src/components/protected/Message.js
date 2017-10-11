import React, { Component } from 'react'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

export default class Messages extends Component{


componentDidMount(){
console.log(this.props)
console.log(this.props.message)
console.log(this.props.username)
}

componentWillReceiveProps(nextProps) {
  console.log(nextProps)
}

render(){
  // Conditionaly add a style to messages sent by user
//  const fromMe = this.props.fromMe ? 'from-me' : ''
console.log(this.props)
const user = firebaseAuth().currentUser.uid
const fromMe = this.props.username === user ? 'from-me' : ''

const message = {
  marginBottom: '20px'
}

const messageBody = {
  maxWidth: '20%',
  display: 'inline-block',
  padding: '10px',
  backgroundColor: '#eee',
  border: '1px',
  borderRadius: '5px',
  paddingRight: '-20px'
}

  const messageFromMe = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '5px'
  }

  const messageFromMeMessageBody = {
    maxWidth: '20%',
    display: 'inline-block',
    padding: '10px',
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
