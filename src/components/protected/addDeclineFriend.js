import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { acceptFriend, declineFriend } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

export default class AddDeclineFriend extends Component {

  onSubmit = (e) => {
    e.preventDefault()
    const user = firebaseAuth().currentUser.uid
    acceptFriend(this.props.request.uid, user)
  }

  handleAlternate = (e) => {
    e.preventDefault()
    const user = firebaseAuth().currentUser.uid
    declineFriend(this.props.request.uid, user)
  }

  render () {

            const divStyle = {
              display: 'block',
              textAlign: 'center',
              background: "#eee",
              padding: "5px",
              margin: "5px",
            }

            const score = {
              padding: "5px",
              margin: "5px",
            }

    return(
      <div style={divStyle}>
      <h2> Jimbo Sent you a Friend Request </h2>
      <label style={score}> <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> Home: { this.props.request.name + "  " } </label>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Button bsStyle="success" type="submit">Accept Friend Request</Button>
          <br/>
          <Button bsStyle="warning" onClick={this.handleAlternate.bind(this)}>Decline Friend Request</Button>
          <h6> Clicking this button will send a notification to them to double
                check their report. The scores won't take effect for now </h6>
        </Form>
       </div>
    )
  }
}
