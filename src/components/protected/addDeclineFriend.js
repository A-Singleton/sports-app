import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { acceptFriend, declineFriend } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { firebaseAuth, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

export default class AddDeclineFriend extends Component {
    constructor(props){
      super(props)
      this.state = {
        name: '' ,
        requesterID: '',
      }
    }

  componentDidMount(){
    console.log("Con Report did mount")
  //  var user =  firebaseAuth().currentUser.uid
  console.log('this.props.user')
    console.log(this.props.friendRequest.friendID)
    var user = this.props.friendRequest.friendID
    this.setState({requesterID: user})
 //
 //    //const userTest = "q2xlsIvehieukIw1QYOi6LxGUp33"
 //  //var queryRef = db.ref("pendingMatches")
 //  var that = this
 //  db.ref(`users/${user}/personal-info/`).on('value', (snapshot)=> {
 //
 //  //  var allPendingMatchesCopy = this.state.allPendingMatches
 //
 //    const data = snapshot.val()
 //    console.log(data)
 //    //var key = Object.keys(data)
 //
 //  //  console.log(key)
 //
 //  // for (var i =0; i < keys.length; i++) {
 //  //
 //  //   var nextMatch = {
 //  //      awayID: data[keys[i]].awayID,
 //  //      awayScore: data[keys[i]].awayScore,
 //  //      date: data[keys[i]].date,
 //  //      hostID: data[keys[i]].hostID,
 //  //      hostScore: data[keys[i]].hostScore,
 //  //      matchID: data[keys[i]].matchID,
 //  //      sport: data[keys[i]].sport,
 //  //      pendingMatchID: keys[i]
 //  //    }
 //  //   //  console.log("data")
 //  //     console.log('nextMatch')
 //  //     console.log(nextMatch)
 //  //
 //  //     allPendingMatchesCopy.push(nextMatch)
 //  // }
 //      this.setState({
 //        FirstName: data.FirstName,
 //        LastName: data.LastName
 //     })
 // })
}

componentWillReceiveProps(nextProps) {
  console.log(nextProps)
}

// TODO: see if not preventing default is better, probably is
  onSubmit = (e) => {
    //e.preventDefault()
    const user = firebaseAuth().currentUser.uid
    acceptFriend(this.props.friendRequest.user, user)
  }

  handleAlternate = (e) => {
    e.preventDefault()
    const user = firebaseAuth().currentUser.uid
    declineFriend(this.props.friendRequest.user, user)
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

      //  <Thumbnail />

    return(
      <div style={divStyle}>
      <h2> { this.state.name } Sent you a Friend Request </h2>
      <label style={score}> <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> </label>
        <Form onSubmit={this.onSubmit.bind(this)}>
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
