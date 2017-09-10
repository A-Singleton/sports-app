import React, { Component } from 'react'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { addUser } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
//import GetScheduledMatches from './getScheduledMatches'

export default class scheduledMatches extends Component {

     constructor(props, context){
      super(props, context)
      //  this.changeList = this.changeList.bind(this)
      this.state = {
          friends: []
         }
        }

componentDidMount(){
// const user = firebaseAuth().currentUser
// console.log(user.uid)
}

handleSubmit = (e) => {
  e.preventDefault()
  console.log('Submitted')
  const user = firebaseAuth().currentUser
  addUser(this.props.friendID, user.uid)
}

render(){
//   console.log('keys')
//   console.log(this.state.keys)
//   const scheduledMatches = ''
// if (this.state.keys) {
//   //  const scheduledMatches = this.state.keys.map((fbKey, i) => {
//     console.log('entered key loop')
//     //console.log(fbKey)
//     return(
//     <GetScheduledMatches
//     keyCodes={this.state.keys}/>
//   )
// }
//)}
  return(
    <div>
    <form onSubmit={this.handleSubmit}>
    <Button bsStyle="primary" type="submit">
      Add as Friend
    </Button>
    </form>
    </div>
  )
 }
}
