import React, { Component } from 'react'
import Message from './Message'

export default class Messages extends Component{

componentDidUpdate(){
  // There is a new message in the state, scroll to bottom of list
  const objDiv = document.getElementById('messageList')
  objDiv.scrollTop = objDiv.scrollHeight
}

// removeed: fromMe={message.fromMe} from message comp. and key={i}

render() {

  const messagesStyle = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    flexGrow: '1',
    padding: '20px'
  }

console.log('this.props.messages')
 console.log(this.props.messages)


 const testMessages = this.props.messages.map((message, i) => {
   console.log('message.test')
   console.log('i')
   console.log(i)
   console.log('message')
   console.log(message)

   return(
          <div> message </div>
   )
 })



  const messages = this.props.messages.map((message, i) => {
    console.log(message[0])
    console.log('message.message')
    console.log(i)
     console.log(message[i])
    return(
      <Message
       key={i}
       username={message[i].username}
       message={message[i].message}
      />
    )
  })

  return(
    <div style={messagesStyle} className='messages' id='messageList'>
    { messages }
    </div>
  )
}

// Messages.defaultProps = {
//   messages: []
// }

}
