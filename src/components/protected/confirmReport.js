import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { firebaseAuth, firebaseStorageRef, ref, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import { recordMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'

export default class ConfirmReport extends Component {

  constructor(){
    super()
    this.state = {
      pendingMatch: ''
    }
  }

  componentDidMount(){
    console.log("Con Report did mount")
    var user =  firebaseAuth().currentUser.uid
  //var ref = db.ref("");
  ref.orderByChild(`pending-matches`).on("value", function(snapshot) {
  //ref.child(`pending-matches`).on("child_added", function(snapshot) {

  //  var pending = "pending-matches"
     var data = snapshot.val().pendingMatches

     console.log("data")
    console.log(data)
   //
  // //  var query = data.orderByChild(`awayID`).equalTo(user)
  // console.log("snapshot.key")
  // console.log(snapshot.key);
  });

  }

  handleSubmit(event) {
      event.preventDefault();
      console.log("handleSubmit")
      //recordMatch(this.state.matchInfo)
    }

    handleAlternate(event) {
      event.preventDefault();
      console.log("HandleAlt")
      // matchDispute(this.props.matchID)
    }

  render () {

    const divStyle = {
      display: 'block',
      textAlign: 'center',
      background: "#eee",
      padding: "5px",
      margin: "5px",
      //width: "550px",
      //justifyContent: 'center'
      //alignItems: 'flex',
      //justifyContent: 'flex',
      //alignSelf: 'flex',
    //  color: 'blue',
    //  backgroundImage: 'url(' + imgUrl + ')',
    };

    return(
      <div style={divStyle}>
        <h2> Jimbo Reported the Scores from Your Match </h2>
        <label> <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> Them: 10 </label>
        <label>  5 :You <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> </label>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Button bsStyle="success" type="submit">Confirm the Scores</Button>
            <br/>
            <h6> Did they make a mistake? </h6>
            <Button bsStyle="warning" onClick={this.handleAlternate.bind(this)}>Dispute the Result</Button>
            <h6> Clicking this button will send a notification to them to double
                  check their report. The scores won't take effect for now </h6>
                  <h5> Learn more </h5>
          </Form>
       </div>
    )
  }
}
