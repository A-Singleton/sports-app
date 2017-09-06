import React, { Component } from 'react'

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

  handleChangeUser(value){
    value.preventDefault()
    this.setState({hostScore: value})
  }

  handleChangeGuest(value){
    value.preventDefault()
    this.setState({awayScore: value})
  }

  onSubmit(e){
    e.preventDefault()
    //send to backend
    // need props of players' IDs
    // recordMatch(this.state.hostScore, this.state.awayScore + props)
  }

render(){


  return (

    <div style={divStyle}>

    <h2 style={headerStyle2}> How did the match go? </h2>

    <label> <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/> You <input style={horInput} className="match-report-user" type="number"
    onChange={this.handleChangeUser}/></label>
    to
    <label> <input style={horInput} className="match-report-guest" type="number"
    onChange={this.handleChangeGuest}/> Your Guest <img className="img-circle avatar" src="http://placehold.it/48x48" alt=""/></label>
    <br/>
     <button type="submit" className="btn btn-primary">Submit the Result</button>
    </div>

  )

}


}
