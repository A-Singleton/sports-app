import React, { Component } from 'react'
import { displayMessages, submitMessagesBackend } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'

export default class ChatRoom extends Component {

  constructor(props, context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = {
        message: '',
        messages: []
    }
  }

  componentDidMount(){
    const matchKey = this.props.matchkey
     //const blank = []
     const fbMessages = displayMessages(matchKey)

      //  console.log('fbMessages Chatroom')
      //  console.log(fbMessages)
    //  if (fbMessages != null){
        this.setState(
          {
          messages: fbMessages
        })
  //    }
    // console.log('this.state.messages')
    // console.log(this.state.messages)
//   })
   //console.log('scope test')
  //  //console.log(currentMessages)
  //  console.log('scope test blank var')
  //  console.log(blank)
  }



  updateMessage(event){
  //  console.log('updateMessage')
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(event){
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    submitMessagesBackend(nextMessage, this.props.matchkey)
  }

  render(){
    // console.log('render messages')
    // console.log(this.state.messages)
    //if(this.state.messages !== undefined){
    const currentMessage = this.state.messages.map((message, i) => {

    return (
      <li key={message.id}>{message.text}</li>
    )
})
//}
    return(
      <div>
        <ol>
        {currentMessage}
        </ol>
      <label>Message</label>
      <br />
      <input onChange={this.updateMessage} type="text" placeholder="Message" />
      <br />
      <button onClick={this.submitMessage}>Write a message...</button>
      </div>
)
}
}
