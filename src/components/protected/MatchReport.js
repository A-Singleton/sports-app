import React, { Component } from 'react'
import { submittedMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { Form, Button} from 'react-bootstrap'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'

export default class MatchReport extends Component{
  constructor(props){
    super(props)
    this.state = {
      hostScore: -1,
      awayScore: -1
    }
    this.handleChangeUser = this.handleChangeUser.bind(this)
    this.handleChangeGuest = this.handleChangeGuest.bind(this)
  }

  handleChangeUser(event){
  //  value.preventDefault()
    console.log(event.target.value)
    this.setState({hostScore: event.target.value})
  }

  handleChangeGuest(event){
    //value.preventDefault()
      console.log(event.target.value)
    this.setState({awayScore: event.target.value})
  }

// TODO: Seperate players into home and away team
  onSubmit = (e) => {
    e.preventDefault()
    // need props of players' IDs
    console.log('submitted')
    const user = firebaseAuth().currentUser

    console.log(Object.keys(this.state.hostScore))
    console.log(JSON.stringify(this.state.hostScore))

    submittedMatch(this.state.hostScore, this.state.awayScore,
       this.props.match.players[0], this.props.match.players[1], this.props.match.id,
     this.props.match.sport, this.props.match.date, user)
  }

render(){

  const divStyle = {
    display: 'block',
    textAlign: 'center',
    background: "#eee",
    padding: "5px",
    margin: "5px",
  };

  const headerStyle2 = {
    color: 'white',
    background: "SteelBlue",
    textAlign: 'center',
    padding: "13px",
    margin: "5px",
    width: "5256x"
  };

  const horInput = {
    padding: "2px",
    width: '40px',
    margin: "10px",
  }

  console.log(" Match Render Props")
  console.log(this.props.match)

  const isEnabled =
  this.state.hostScore > -1 &&
  this.state.awayScore > -1;

  return (
    <div style={divStyle}>
    <h2 style={headerStyle2}> How did the match go? </h2>
    <h3> {this.props.match.sport} on {this.props.match.date} </h3>
    <label> <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> {this.props.match.creatorName} <input style={horInput} className="match-report-user" type="number" min="0"
    onChange={this.handleChangeUser}/></label>
    to
    <label> <input style={horInput} className="match-report-guest" type="number" min="0"
    onChange={this.handleChangeGuest}/> Your Guest <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/></label>
    <br/>
    <Form onSubmit={this.onSubmit}>
     <Button disabled={!isEnabled} bsStyle="success" type="submit">Submit the Result</Button>
    </Form>
    </div>
  )
}
}
