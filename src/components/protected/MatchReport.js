import React, { Component } from 'react'
import { submittedMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'
import { Form,  FormGroup, FormControl, Col, Button, ControlLabel, Row} from 'react-bootstrap'
import { ref, firebaseAuth, firebaseStorageRef, taskEvent, db } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/config/constants'
import Thumbnail from './thumbnail'

export default class MatchReport extends Component{
  constructor(props){
    super(props)
    this.state = {
      hostScore: -1,
      awayScore: -1,
      threeScore: -1,
      fourthScore: -1
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

  handleChange3 = (event) => {
    //value.preventDefault()
      console.log(event.target.value)
    this.setState({threeScore: event.target.value})
  }

  handleChange4 = (event) => {
    //value.preventDefault()
      console.log(event.target.value)
    this.setState({fourthScore: event.target.value})
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

  onGolfSubmit = (e) => {
    e.preventDefault()
    // need props of players' IDs
    console.log('golf submitted')
    const user = firebaseAuth().currentUser

    console.log(Object.keys(this.state.hostScore))
    console.log(JSON.stringify(this.state.hostScore))

    // submittedMatch(this.state.hostScore, this.state.awayScore,
    //    this.props.match.players, this.props.match.players2, this.props.match.id,
    //  this.props.match.sport, this.props.match.date, user, this.props.match.idStack)
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
  console.log(this.props.players)
  console.log(this.props.players2)
  console.log(this.props.players3)
  console.log(this.props.players4)

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

    if (typeof this.props.players3 !== "undefined") {
      var players3 = this.props.players3.map((player, i) => {

        console.log('players 3')
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


        console.log(this.props.players4)
        if (typeof this.props.players4 !== "undefined") {
          var players4 = this.props.players4.map((player, i) => {

            console.log('players 4')
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
 //
//var golf = {
// golfIsEnabled()
const golfIsEnabled =
this.state.hostScore > -1 &&
this.state.awayScore > -1 &&
this.state.threeScore > -1 &&
this.state.fourthScore > -1

  console.log(" Golf Enabled")
  console.log(golfIsEnabled)
  console.log(this.state.hostScore)
  console.log(this.state.awayScore)
  console.log(this.state.threeScore)
  console.log(this.state.fourthScore)

  // <Col componentClass={ControlLabel} smOffset={4} sm={2}>
  //     { players4 }
  //     <label> <input style={horInput} className="match-report-guest" type="number" min="0"
  //     onChange={this.handleChange4}/> </label>
  // </Col>

  return (
    <div style={divStyle}>
    <h2 style={headerStyle2}> How did the match go? </h2>
    <h3> {this.props.match.sport} on {this.props.match.date} </h3>
    <br/>
    { (this.props.match.sport === "Golf") ?
    <Row>
    <div>
    <Col componentClass={ControlLabel} smOffset={0} sm={2}>
            { theHomePlayers }
        <label> <input style={horInput} className="match-report-user" type="number" min="0"
        onChange={this.handleChangeUser}/></label>
    </Col>
    <Col componentClass={ControlLabel} smOffset={1} sm={2}>
        { theAwayPlayers }
        <label> <input style={horInput} className="match-report-guest" type="number" min="0"
        onChange={this.handleChangeGuest}/> </label>
    </Col>
    <Col componentClass={ControlLabel} smOffset={1} sm={2}>
        { players3 }
        <label> <input style={horInput} className="match-report-guest" type="number" min="0"
        onChange={this.handleChange3}/> </label>
    </Col>
    <Col componentClass={ControlLabel} smOffset={1} sm={2}>
        { players4 }
        <label> <input style={horInput} className="match-report-guest" type="number" min="0"
        onChange={this.handleChange4}/> </label>
    </Col>
    </div>
    </Row>
        :
        <div>
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
  </div>}
    <br/>
    { (this.props.match.sport === "Golf") ?
    <Row>
    <Form onSubmit={this.onGolfSubmit}>
      <br/>
     <Button disabled={!golfIsEnabled} bsStyle="success" type="submit">Submit the Result</Button>
    </Form>
    </Row>
    :
    <Form onSubmit={this.onSubmit}>
        <br/>
     <Button disabled={!isEnabled} bsStyle="success" type="submit">Submit the Result</Button>
    </Form> }
    </div>
  )
}
}
