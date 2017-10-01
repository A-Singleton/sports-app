import React, { Component } from 'react'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel, Grid, Row} from 'react-bootstrap'
import { recordMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import ModalConfirmScore from './modalConfirmScore'
import Thumbnail from './thumbnail'

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

        // const divStyle = {
        //   display: 'block',
        //   textAlign: 'center',
        //   background: "#eee",
        //   padding: "5px",
        //   width: '550px',
        // };

        const score = {
          padding: "5px",
          margin: "5px",
        };

        console.log(this.props.matches)
        console.log(this.props.matches.awayScore)

  //  const { from } = this.props.location.state || '/'
  //  const { fireRedirect } = this.state
  // {this.state.fireRedirect && (
  //   <Redirect to={'/repReport'}/>
  // )}


  var theHomePlayers = this.props.matches.hostID.map((player, i) => {

    console.log('match Posts')
    console.log(i)
     console.log(player)

    return(
      <Thumbnail
       key={i}
       player={player}
      />
    )
  })

  //if (typeof this.props.p !== "undefined") {
  var theAwayPlayers = this.props.matches.awayID.map((player, i) => {

    console.log('players 2')
    console.log(i)
    console.log(player)

        return(
          <Thumbnail
           key={i}
           player={player}
          />
        )
      })
  //  }

// <Form onSubmit={this.handleSubmit.bind(this)}>
//  </Form>
//  <Button bsStyle="success" type="submit">Confirm the Scores</Button>
//<img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/>
//<img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/>
//     const leftMargin = {
//
//      }
//
//      const rightMargin = {
//
//}

    return(
      <div>
      <h2> Jimbo Reported the Scores from Your Match </h2>
      <h3> { this.props.matches.sport + " at " + this.props.matches.date } </h3>
      <br/>
      <Grid >
      <Row className="show-grid">
      <Col xs={2} xsOffset={0}>  { theHomePlayers }  </Col>
      <Col xs={2} xsOffset={0}> { theAwayPlayers } </Col>
      </Row>
      </ Grid>

      <Grid >
      <Row className="show-grid">
      <Col xs={3} xsOffset={0}> <h3> <strong> Home Score: { this.props.matches.hostScore } </strong> </h3> </Col>
      <Col xs={3} md={0}> <h3> <strong> { this.props.matches.awayScore } : Away Score </strong> </h3> </Col>
      </Row>
      </ Grid>
      <br/>
          <ModalConfirmScore match={this.props.matches}/>
          <br/>
          <h6> Did they make a mistake? </h6>
          <Button bsStyle="warning" onClick={this.handleAlternate.bind(this)}>Dispute the Result</Button>
          <h6> Clicking this button will send a notification to them to double
                check their report. The scores will not take effect for now </h6>
                <h5> Learn more </h5>
       </div>
    )
  }
}
