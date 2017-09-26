import React, { Component } from 'react'
import { submittedMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import Thumbnail from './thumbnail'

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

  onSubmit = (e) => {
    e.preventDefault()
    // need props of players' IDs
    console.log('submitted')
    const user = firebaseAuth().currentUser

    console.log(Object.keys(this.state.hostScore))
    console.log(JSON.stringify(this.state.hostScore))

    submittedMatch(this.state.hostScore, this.state.awayScore,
       this.props.match.players, this.props.match.players2, this.props.match.id,
     this.props.match.sport, this.props.match.date, user, this.props.match.idStack)
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
  //
  // const homeMargin = {
  //   marginLeft: "-600px"
  // }

  console.log(" Match Render Props")
  console.log(this.props.match)
  console.log(this.props.players)
  console.log(this.props.players2)

  const isEnabled =
  this.state.hostScore > -1 &&
  this.state.awayScore > -1;


  var theHomePlayers = this.props.players.map((player, i) => {

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

if (typeof this.props.players2 !== "undefined") {
  var theAwayPlayers = this.props.players2.map((player, i) => {

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
    }

    
  //  { playeer3 }
  //  { player4 }


  return (
    <div style={divStyle}>
    <h2 style={headerStyle2}> How did the match go? </h2>
    <h3> {this.props.match.sport} on {this.props.match.date} </h3>
    <Col componentClass={ControlLabel} smOffset={3} sm={2}>
            { theHomePlayers }
        <label> <input style={horInput} className="match-report-user" type="number" min="0"
        onChange={this.handleChangeUser}/></label>
    </Col>
    <Col componentClass={ControlLabel} smOffset={2} sm={2}>
        { theAwayPlayers }
        <label> <input style={horInput} className="match-report-guest" type="number" min="0"
        onChange={this.handleChangeGuest}/> </label>
    </Col>
    <br/>
    <Form onSubmit={this.onSubmit}>
     <Button disabled={!isEnabled} bsStyle="success" type="submit">Submit the Result</Button>
    </Form>
    </div>
  )
}
}
