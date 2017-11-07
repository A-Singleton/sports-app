import React, { Component } from 'react'

export default class ChatInput extends Component{
constructor(props){
super(props)
this.state = { chatInput: '' }
this.textChangeHandler = this.textChangeHandler.bind(this)
this.submitHandler = this.submitHandler.bind(this)
}

textChangeHandler(e){
  this.setState({ chatInput: e.target.value })
}

submitHandler(event){
  event.preventDefault()

  // Callback
  this.props.onSend(this.state.chatInput)

  // Clear input box
  this.setState({ chatInput: ''})
}

render(){

  const chatInputStyle = {
    position: 'relative',
    overflow: 'hidden',
    padding: '0 40px',
    flexShrink: '0'
  }

  const chatInputText = {
    width: '50%',
    marginLeft: '-20px',
    marginRight: '-20px'
  }

return(
  <form style={chatInputStyle} className="chat-input" onSubmit={this.submitHandler}>
    <input type="text"
      style={chatInputText}
      onChange={this.textChangeHandler}
      value={this.state.chatInput}
      placeholder="Write a message..."
      required />
    </form>
)}
}
