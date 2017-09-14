import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'

export default class ConfirmReport extends Component {

  handleSubmit(event) {
      event.preventDefault();
      console.log("handleSubmit")
      // reportConfirmed(this.props.matchID)
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
