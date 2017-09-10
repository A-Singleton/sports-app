import React, { Component } from 'react'
import { recordMatch } from 'C:/Users/Duwan_000/Documents/GitHub/sports-app/src/helpers/auth.js'

export default class MatchReport extends Component{
  constructor(props){
    super(props)
    this.state = {
      hostScore: "",
      awayScore: ""
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

  onSubmit(e){
    e.preventDefault()
    //send to backend
    // need props of players' IDs
    recordMatch(this.state.hostScore, this.state.awayScore, this.props.homeId, this.props.guestId)
  }

render(){

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


  return (
    <div style={divStyle}>
    <h2 style={headerStyle2}> How did the match go? </h2>
    <label> <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> You <input style={horInput} className="match-report-user" type="number" min="0"
    onChange={this.handleChangeUser}/></label>
    to
    <label> <input style={horInput} className="match-report-guest" type="number" min="0"
    onChange={this.handleChangeGuest}/> Your Guest <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/></label>
    <br/>
     <button type="submit" className="btn btn-primary">Submit the Result</button>
    </div>
  )
}
}
