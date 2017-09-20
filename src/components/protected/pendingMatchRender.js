import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { recordMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

export default class PendingMatchRender extends Component {
  constructor () {
     super();
     this.state = {
       fireRedirect: false
     }
   }


  handleSubmit(event) {
      event.preventDefault();
      console.log("handleSubmit")

      recordMatch(this.props.matches)
      // redirect to rep page
      this.setState({ fireRedirect: true })
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

        const score = {
          padding: "5px",
          margin: "5px",
        };

        console.log(this.props.matches)
        console.log(this.props.matches.awayScore)

  //  const { from } = this.props.location.state || '/'
  //  const { fireRedirect } = this.state

    return(
      <div style={divStyle}>
      <h2> Jimbo Reported the Scores from Your Match </h2>
      <h3> { this.props.matches.sport + " at " + this.props.matches.date } </h3>
      <label style={score}> <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> Home: { this.props.matches.hostScore + "  " } </label>
      <label>  { this.props.matches.awayScore } : Away <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> </label>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Button bsStyle="success" type="submit">Confirm the Scores</Button>
          <br/>
          <h6> Did they make a mistake? </h6>
          <Button bsStyle="warning" onClick={this.handleAlternate.bind(this)}>Dispute the Result</Button>
          <h6> Clicking this button will send a notification to them to double
                check their report. The scores will not take effect for now </h6>
                <h5> Learn more </h5>
        </Form>

        {this.state.fireRedirect && (
          <Redirect to={'/repReport'}/>
        )}


       </div>
    )
  }
}
